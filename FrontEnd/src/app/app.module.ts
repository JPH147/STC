import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* Angular Material*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { SidenavComponent } from './sidenav/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';
import {TreeNested  } from './menu/menu'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatSortModule,MatTableModule, MatPaginatorModule, MatProgressSpinnerModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCardModule} from '@angular/material/card';

/* Generales */
import {routing, appRP} from './rutas';
import { AppComponent } from './app.component';

/* Componentes del sistema */
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

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    SidenavComponent,
    TreeNested,
    AlmacenesComponente,
    ArticulosComponente,
    ClientesComponente,
    CotizacionComponente,
    CrtComponente,
    EmpresasComponente,
    FacturaComponente,
    FormaspagoComponente,
    GuiaremisionComponente,
    InformacionComponente,
    KilometrajeComponente,
    LicenciachoferesComponente,
    LiquidacionesComponente,
    ManifiestoComponente,
    MantenimientocorrectivoComponente,
    MantenimientopreventivoComponente,
    MarcamodelosComponente,
    MonedasComponente,
    MovimientosComponente,
    NotasComponente,
    NumeraciondocumentosComponente,
    OrdenrecojoComponente,
    OrdentrabajoComponente,
    PackinlistComponente,
    ProveedoresComponente,
    ProveedorVerComponente,
    RelacionchoferesComponente,
    RelacionvehiculosComponente,
    ReportealmacenesComponente,
    ReportechoferesComponente,
    ReportemantenimientosComponente,
    ReportevehiculosComponente,
    ReporteventasComponente,
    RepuestosComponente,
    RutasComponente,
    SeguimientodocumentosComponente,
    SegurochoferesComponente,
    SegurovehiculosComponente,
    StockComponente,
    TipovehiculosComponente,
    UsuariosComponente,
    VencimientochoferesComponente,
    VencimientovehiculosComponente
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    CdkTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  entryComponents: [TreeNested,ProveedoresComponente],
  providers: [
    appRP
  ],
  bootstrap: [AppComponent,TreeNested]
})
export class AppModule { }
