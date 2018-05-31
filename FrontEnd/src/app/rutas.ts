import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {AlmacenesComponente} from './contenido/componentes/almacenes';
import { ArticulosComponente } from './contenido/componentes/articulos';
import { ClientesComponente } from './contenido/componentes/clientes';
import { CotizacionComponente } from './contenido/componentes/cotizacion';
import { CrtComponente } from './contenido/componentes/crt';
import { EmpresasComponente } from './contenido/componentes/empresas';
import { FacturaComponente } from './contenido/componentes/factura';
import { FormaspagoComponente } from './contenido/componentes/formas de pago';
import { GuiaremisionComponente } from './contenido/componentes/guia de remision';
import { InformacionComponente } from './contenido/componentes/informacion';
import { KilometrajeComponente } from './contenido/componentes/kilometraje y mantenimiento';
import { LicenciachoferesComponente } from './contenido/componentes/licencias choferes';
import { LiquidacionesComponente } from './contenido/componentes/liquidaciones';
import { ManifiestoComponente } from './contenido/componentes/manifiesto';
import { MantenimientocorrectivoComponente } from './contenido/componentes/mantenimiento correctivo';
import { MantenimientopreventivoComponente } from './contenido/componentes/mantenimiento preventivo';
import { MarcamodelosComponente } from './contenido/componentes/marcas y modelos';
import { MonedasComponente } from './contenido/componentes/monedas';
import { MovimientosComponente } from './contenido/componentes/movimientos';
import { NotasComponente } from './contenido/componentes/notas';
import { NumeraciondocumentosComponente } from './contenido/componentes/numeracion de documentos';
import { OrdenrecojoComponente } from './contenido/componentes/orden de recojo';
import { OrdentrabajoComponente } from './contenido/componentes/orden de trabajo';
import { PackinlistComponente } from './contenido/componentes/pack in list';
import { ProveedoresComponente } from './contenido/componentes/proveedores';
import { ProveedorVerComponente } from './contenido/componentes/proveedor-ver';
import { RelacionchoferesComponente } from './contenido/componentes/relacion de choferes';
import { RelacionvehiculosComponente } from './contenido/componentes/relacion de vehiculos';
import { ReportealmacenesComponente } from './contenido/componentes/reporte de almacenes';
import { ReportechoferesComponente } from './contenido/componentes/reporte de choferes';
import { ReportemantenimientosComponente } from './contenido/componentes/reporte de mantenimientos';
import { ReportevehiculosComponente } from './contenido/componentes/reporte de vehiculos';
import { ReporteventasComponente } from './contenido/componentes/reporte de ventas';
import { RepuestosComponente } from './contenido/componentes/repuestos';
import { RutasComponente } from './contenido/componentes/rutas';
import { SeguimientodocumentosComponente } from './contenido/componentes/seguimiento de documentos';
import { SegurochoferesComponente } from './contenido/componentes/seguros de choferes';
import { SegurovehiculosComponente } from './contenido/componentes/seguros de vehiculos';
import { StockComponente } from './contenido/componentes/stock';
import { TipovehiculosComponente } from './contenido/componentes/tipo de vehiculos';
import { UsuariosComponente } from './contenido/componentes/usuarios';
import { VencimientochoferesComponente } from './contenido/componentes/vencimientos choferes';
import { VencimientovehiculosComponente } from './contenido/componentes/vencimientos vehiculos';

const appRoutes: Routes=[
    {path:'', component:EmpresasComponente},
    {path: 'almacenes', component: AlmacenesComponente},
    {path: 'articulos', component: ArticulosComponente},
    {path:'clientes', component:ClientesComponente},
    {path: 'cotizacion', component: CotizacionComponente},
    {path: 'crt', component: CrtComponente},
    {path:'empresas', component:EmpresasComponente},
    {path: 'factura', component: FacturaComponente},
    {path: 'formaspago', component: FormaspagoComponente},
    {path: 'guiaremision', component: GuiaremisionComponente},
    {path: 'informacion', component: InformacionComponente},
    {path: 'kilometrajeymantenimiento', component: KilometrajeComponente},
    {path: 'licenciachoferes', component: LicenciachoferesComponente},
    {path: 'liquidaciones', component: LiquidacionesComponente},
    {path: 'manifiesto', component: ManifiestoComponente},
    {path: 'mantenimientocorrectivo', component: MantenimientocorrectivoComponente},
    {path: 'mantenimientopreventivo', component: MantenimientopreventivoComponente},
    {path: 'marcasymodelos', component: MarcamodelosComponente},
    {path: 'monedas', component: MonedasComponente},
    {path: 'movimientos', component: MovimientosComponente},
    {path: 'notas', component: NotasComponente},
    {path: 'numeraciondocumentos', component: NumeraciondocumentosComponente},
    {path: 'ordenrecojo', component: OrdenrecojoComponente},
    {path: 'ordentrabajo', component: OrdentrabajoComponente},
    {path: 'packinlist', component: PackinlistComponente},
    {path: 'proveedores', component: ProveedoresComponente},
    {path: 'proveedores/:id', component: ProveedorVerComponente},
    {path: 'relacionchoferes', component: RelacionchoferesComponente},
    {path: 'relacionvehiculos', component: RelacionvehiculosComponente},
    {path: 'reportealmacenes', component: ReportealmacenesComponente},
    {path: 'reportechoferes', component: ReportechoferesComponente},
    {path: 'reportemantenimientos', component: ReportemantenimientosComponente},
    {path: 'reportevehiculos', component: ReportevehiculosComponente},
    {path: 'reporteventas', component: ReporteventasComponente},
    {path: 'repuestos', component: RepuestosComponente},
    {path: 'rutas', component: RutasComponente},
    {path: 'seguimientodocumentos', component: SeguimientodocumentosComponente},
    {path: 'segurochoferes', component: SegurochoferesComponente},
    {path: 'segurovehiculos', component: SegurovehiculosComponente},
    {path: 'stock', component: StockComponente},
    {path: 'tipovehiculos', component: TipovehiculosComponente},
    {path: 'usuarios', component: UsuariosComponente},
    {path: 'vencimientochoferes', component: VencimientochoferesComponente},
    {path: 'vencimientovehiculos', component: VencimientovehiculosComponente},
    {path:'**', component:ClientesComponente}
];

export const appRP: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
