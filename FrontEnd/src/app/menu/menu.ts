import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, of as observableOf} from 'rxjs';

/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/**
 * The Json tree data in string. The data could be parsed into Json object
 */
const TREE_DATA = `
  {
    "Ventas": {
      "Clientes": "clientes",
      "Emisión de documentos":{
        "Cotizacion":"cotizacion",
        "Orden de recojo":"ordenrecojo",
        "Orden de trabajo":"ordentrabajo",
        "Guia de remision":"guiaremision",
        "Pack in list":"packinlist",
        "CRT":"crt",
        "Manifiesto":"manifiesto",
        "Factura":"factura",
        "Notas":"notas"
      },
      "Seguimiento de documentos": "seguimientodocumentos",
      "Reportes": "reporteventas"
    },
    "Almacenes": {
        "Movimientos": "movimientos",
        "Stock": "stock",
        "Artículos": "articulos",
        "Reportes": "reportealmacenes"
    },
    "Vehículos": {
        "Relación": "relacionvehiculos",
        "Vencimientos": "vencimientovehiculos",
        "Kilometraje y mantenimiento": "kilometrajeymantenimiento",
        "Reportes": "reportevehiculos"
    },
    "Choferes": {
        "Relación": "relacionchoferes",
        "Vencimientos": "vencimientochoferes",
        "Liquidaciones": "liquidaciones",
        "Reportes": "reportechoferes"
    },
    "Mantenimiento": {
        "Preventivo": "mantenimientopreventivo",
        "Correctivo": "mantenimientocorrectivo",
        "Repuestos": "repuestos",
        "Reportes": "reportemantenimientos"
    },
    "Configuración": {
        "General":{
          "Empresas":"empresas",
          "Monedas":"monedas",
          "Numeración de documentos":"numeraciondocumentos"
        },
        "Usuarios": "usuarios",
        "Clientes": {
          "Formas de pago":"formaspago",
          "Rutas":"rutas"
        },
        "Proveedores": "proveedores",
        "Choferes": {
          "Licencias":"licenciachoferes",
          "Seguros":"segurochoferes"
        },
        "Vehículos": {
          "Seguros":"segurovehiculos",
          "Tipos":"tipovehiculos",
          "Marca y modelo":"marcasymodelos"
        },
        "Almacenes": "almacenes",
        "Sobre el sistema": "informacion"
    }
  }`;

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(value: any, level: number): FileNode[] {
    let data: any[] = [];
    for (let k in value) {
      let v = value[k];
      let node = new FileNode();
      node.filename = `${k}`;
      if (v === null || v === undefined) {
        // no action
      } else if (typeof v === 'object') {
        node.children = this.buildFileTree(v, level + 1);
      } else {
        node.type = v;
      }
      data.push(node);
    }
    return data;
  }
}

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html',
  styleUrls: ['menu.css'],
  providers: [FileDatabase]
})
export class TreeNested {
  nestedTreeControl: NestedTreeControl<FileNode>;

  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor(database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  private _getChildren = (node: FileNode) => { return observableOf(node.children); };

  hasNestedChild = (_: number, nodeData: FileNode) => {return !(nodeData.type); };
}
