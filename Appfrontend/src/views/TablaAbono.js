import React from "react";

import routes from "routes.js";
import Busqueda from "../components/Navbars/Busqueda";
import empresaServices from "../components/service/Empresa"

import tecnicoServices from "../components/service/Tecnico"

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button, 
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup
} from "reactstrap";
import abonoServices from "../components/service/OrdenServicio"


class TablesAbono extends React.Component {
    constructor(props)
  {
    super(props)
    this.setModalEditar=this.setModalEditar.bind(this);
    this.setAbono=this.setAbono.bind(this);
    this.setIdDelete=this.setIdDelete.bind(this);
    this.valorSearchEmpresa=this.valorSearchEmpresa.bind(this);
    this.setModalCrear=this.setModalCrear.bind(this);
     this.setEmpresa=this.setEmpresa.bind(this);
    this.setTecnico=this.setTecnico.bind(this);
    this.state = {
      listAbono:[],
      listBusquedaAbono:[],
          listEmpresa:[],
        ListaAbono:[],
        listTecnico:[],
          id:0,
          marca: "",
          modelo: "",
          potencia: "",
          motorMarca: "",
          motorModelo: "",
          motorNumero:"",
          fechaAnterior: "",
          fechaActual: "",
          horometroActual:"",
          horometroAnterior: "",
          cabinaAcustica:"",
          cabinaPintura:"",
          cabinaCerradura:"",
          enfriamientoManguera:"",
          enfriamientoPerdidas:"",
          enfriamientoNivel:"",
          bateriaCantidad:"",
          bateriaAcido:"",
          bateriaConexion:"",
          bateriaMarca:"",
          bateriaEstado:"",
          bateriaBornes:"",
          tensionParado:"",
          tensionMarcha: "",
          tensionArranque: "",
          fechaInstalacion:"",
          perdidaCombustible:"",
          perdidaAceite: "",
          perdidaAgua: "",
          estadoMangueras: "",
          estadoFiltroAire: "",
          estadoRodantes: "",
          nivelAceite:"",
          nivelCombustible: "",
          presionAceite: "",
          tensionRs: 380,
          tensionSt:380 ,
          tensionRt: 380,
          tensionRn: 220,
          tensionSn: 220,
          tensionTn: 220,
          autMan: "",
          observaciones:"",
          idFirma: 0,
          idEmpresa:{},
          idTecnico:{},
          modalEditar:false,
          modalEliminar:false,
          editarModal:true,
          modalCrear:false
    }
    
  }
   async setEmpresa(e){

    const id=e.target.value
    console.log(id);
     const elemento = await empresaServices.get(id)
    console.log(elemento);
    if (elemento.success) {
        this.setState(
        {
          idEmpresa:elemento.data
        }
        )
        console.log(this.state.idEmpresa)
    }
    else {
      alert("Error server ==>"+JSON.stringify(elemento))
    }
   
  }
  async setTecnico(e){

    const id=e.target.value
    console.log(id);
     const elemento = await tecnicoServices.get(id)
    console.log(elemento);
    if (elemento.success) {
        this.setState(
        {
          idTecnico:elemento.data
        }
        )
        console.log(this.state.idTecnico)
    }
    else {
      alert("Error server ==>"+JSON.stringify(elemento))
    }
   
  }

    setAbono(elemento,caso){
           if (caso == 'Editar'){
                this.setState({editarModal:false})
            }else{
                this.setState({editarModal:true})
            }
    this.setState((state) => ({
          id:elemento.id,
          marca: elemento.marca,
          modelo: elemento.modelo,
          potencia: elemento.potencia,
          motorMarca: elemento.motorMarca,
          motorModelo: elemento.motorModelo,
          motorNumero:elemento.motorNumero,
          fechaAnterior: elemento.fechaAnterior,
          fechaActual: elemento.fechaActual,
          horometroActual:elemento.horometroActual,
          horometroAnterior: elemento.horometroAnterior,
          cabinaAcustica:elemento.cabinaAcustica,
          cabinaPintura:elemento.cabinaPintura,
          cabinaCerradura:elemento.cabinaCerradura,
          enfriamientoManguera:elemento.enfriamientoManguera,
          enfriamientoPerdidas:elemento.enfriamientoPerdidas,
          enfriamientoNivel:elemento.enfriamientoNivel,
          bateriaCantidad:elemento.bateriaCantidad,
          bateriaAcido:elemento.bateriaAcido,
          bateriaConexion:elemento.bateriaConexion,
          bateriaMarca:elemento.bateriaMarca,
          bateriaEstado:elemento.bateriaEstado,
          bateriaBornes:elemento.bateriaBornes,
          tensionParado:elemento.tensionParado,
          tensionMarcha: elemento.tensionMarcha,
          tensionArranque: elemento.tensionArranque,
          fechaInstalacion:elemento.fechaInstalacion,
          perdidaCombustible:elemento.perdidaCombustible,
          perdidaAceite: elemento.perdidaAceite,
          perdidaAgua: elemento.perdidaAgua,
          estadoMangueras: elemento.estadoMangueras,
          estadoFiltroAire: elemento.estadoFiltroAire,
          estadoRodantes: elemento.estadoRodantes,
          nivelAceite:elemento.nivelAceite,
          nivelCombustible: elemento.nivelCombustible,
          presionAceite: elemento.presionAceite,
          tensionRs: elemento.tensionRs,
          tensionSt:elemento.tensionSt,
          tensionRt: elemento.tensionRt,
          tensionRn: elemento.tensionRn,
          tensionSn: elemento.tensionSn,
          tensionTn: elemento.tensionTn,
          autMan: elemento.autMan,
          observaciones:elemento.observaciones,
          idFirma: elemento.idFirma,
          idEmpresa:elemento.idEmpresa,
          idTecnico:elemento.idTecnico,
          ie:'',
          ide:'',
          busqueda:'',
          modalEditar:true
    }))
     
        
 }

 setModalCrear(){
     this.setState({
         marca: "",
          modelo: "",
          potencia: "",
          motorMarca: "",
          motorModelo: "",
          motorNumero:"",
          fechaAnterior: "",
          fechaActual: "",
          horometroActual:"",
          horometroAnterior: "",
          cabinaAcustica:"",
          cabinaPintura:"",
          cabinaCerradura:"",
          enfriamientoManguera:"",
          enfriamientoPerdidas:"",
          enfriamientoNivel:"",
          bateriaCantidad:"",
          bateriaAcido:"",
          bateriaConexion:"",
          bateriaMarca:"",
          bateriaEstado:"",
          bateriaBornes:"",
          tensionParado:"",
          tensionMarcha: "",
          tensionArranque: "",
          fechaInstalacion:"",
          perdidaCombustible:"",
          perdidaAceite: "",
          perdidaAgua: "",
          estadoMangueras: "",
          estadoFiltroAire: "",
          estadoRodantes: "",
          nivelAceite:"",
          nivelCombustible: "",
          presionAceite: "",
          tensionRs: 380,
          tensionSt:380 ,
          tensionRt: 380,
          tensionRn: 220,
          tensionSn: 220,
          tensionTn: 220,
          autMan: "",
          observaciones:"",
		      busqueda:"",
          idFirma: 0,
          idEmpresa:{},
          idTecnico:{},
          modalCrear:!this.state.modalCrear
    });

   }

  setModalEliminar(){
    this.setState({modalEliminar:!this.state.modalEliminar})
  }
  
  setIdDelete(i,id){
      this.setState({
        ie:i,
        ide:id,
        modalEliminar:true
      })
  }

  async resetLista(){

    const res = await abonoServices.list()
    console.log(res);
    if (res.success) {
       this.setState({listAbono:res.list})
       this.filtrarElementos();
    }
    else {
      alert("Error server ==>"+JSON.stringify(res))
    }

  }

  async onClickSave()
  {
    const res = await abonoServices.create(this.state)
    if (res.success) {
      alert(res.message)
      this.setState({modalCrear:false});
      
    }
    else {
      alert("Error ==>"+res.message.message)
    }
    this.resetLista();
      this.filtrarElementos();
  }



  async onClickDelete()
  {
    const id=this.state.ide;
    const i=this.state.ie;
    var yes = true;
    console.log(id,i);
    if (yes === true){ 
      
      const res = await abonoServices.delete(id)

      if (res.success) {
        this.resetLista();
        const list =this.state.listBusquedaAbono
        list.splice(i,1)
         this.setState((state)=>({listBusquedaAbono:list,
                      modalEliminar:false
        }))
      }
      else{
        console.log(res); alert(JSON.stringify(res))
      } 
    }
  }

  setModalEditar(){

    this.setState({
        modalEditar:!this.state.modalEditar
    })
  };

    async onClickUpdate()
  { 
    console.log("Execute update");
    console.log(this.state.id);
    const res = await abonoServices.update(this.state)
    if (res.success) {
      alert(res.message)
      
     this.setState({modalEditar:false});
     this.resetLista();
      this.filtrarElementos();
    }
    else {
      console.log("Error");
      console.log(res);
      alert("Error ==>"+JSON.stringify(res.data))
      this.setState({modalEditar:false});
    }

  }
  
 async valorSearchEmpresa(emp){
  console.log(emp)
  await this.setState({
    busqueda:emp
  })
  this.filtrarElementos();
 }

 filtrarElementos=()=>{
  const lista=this.state.listAbono;
  var search=lista.filter(item=>{
    if(item.id.toString().includes(this.state.busqueda)//||
       //item.idEmpresa.nombre.toLowerCase().includes(this.state.busqueda)||
       //item.idEmpresa.nombre.includes(this.state.busqueda)||
       //item.idTecnico.nombre.toLowerCase().includes(this.state.busqueda)||
       //item.idTecnico.nombre.includes(this.state.busqueda)
       )
  
            {
              return item
            }
  })
    console.log(search)
    this.setState({listBusquedaAbono:search})
 }
 
  async componentDidMount(){

    this.setState({listBusquedaAbono:this.state.listAbono});
    console.log("Mounted List");
    const res = await abonoServices.list()
    console.log(res);
    if (res.success) {
      this.setState({listAbono:res.list})
    }
    else {
      alert("Error server ==>"+JSON.stringify(res))
    }

    

     console.log("Mounted ListEmpresa");
    const res1 = await empresaServices.list()
    console.log(res1);
    if (res1.success) {
      this.setState({listEmpresa:res1.list})
    }
    else {
      alert("Error server ==>"+JSON.stringify(res))
    }

    console.log("Mounted listTecnico");
    const rest = await tecnicoServices.list()
    console.log(rest);
    if (rest.success) {
      this.setState({listTecnico:rest.list})
    }
    else {
      alert("Error server ==>"+JSON.stringify(rest))

    }
this.setState({listBusquedaAbono:this.state.listAbono});
  }




  render() {

      const editarModal=this.state.editarModal;
       const nombreEmpresa=this.state.idEmpresa.nombre;
      const nombreTecnico=this.state.idTecnico.nombre;
  
    return (
      <>
        
       
                    
        <div className="content">
          <Row>
            <Col md="12">
            <div class="row ">
                    <div class="form-group col-md-6 ">
            <Busqueda searchBusqueda={this.valorSearchEmpresa}/>
                    </div>
           <div class="form-group col-md-6 pl-5 ">
            <Button color="success"  onClick={this.setModalCrear}  size="lg">Nuevo</Button>
            </div>
            </div>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tabla Abono</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>ID Abono</th>
                        <th>Empresa</th>
                        <th>Tecnico</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      {
              this.state.listBusquedaAbono.map((data,i)=>{
                return(
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.idEmpresa.nombre}</td>
                    <td>{data.idTecnico.nombre}</td>
                    
                    <td>
                           <Button className="btn-icon" color="info" size="sm"
                           onClick={()=>{this.setAbono(data,'Ver')}} 
                        href="#">
                          <i className="fas fa-eye" />
                          </Button>{` `}
                           
                         <Button  className="btn-icon" color="success" size="sm"
                          onClick={()=>{this.setAbono(data,'Editar')}} 
                         >
                          <i className="fas fa-pencil-alt"></i>
                         </Button>{` `}

                          <Button className="btn-icon" color="danger" size="sm" 
                        href="#" onClick={()=>this.setIdDelete(i,data.id)}>
                          <i className="fas fa-trash-alt" />
                          </Button>
                      
                    </td>
                  </tr>
                )
              })
            }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
       
          </div>
           <Modal  isOpen={this.state.modalEditar} toggle={this.setModalEditar} size="lg">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                   Abono
                  </h3>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    onClick={this.setModalEditar}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </div>
                <ModalBody >
                
                <div class="row ">
                    
                    <div class="form-group col-md-4 ">
                     <label>ID Abono</label>
                      <input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="text"
                        name="id"
                        value={this.state.id}
                        onChange={(value)=>this.setState({id:value.target.value})}
                      /> 
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Empresa</label>
                      <input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="text"
                        name="empresa"
                        value={this.state.idEmpresa.nombre}
                        onChange={(value)=>this.setState({idEmpresa:value.target.value})}
                      /> 
                      </div>
                    </div> 

                    <div class="border border-info my-2 p-2"> 
                    <h3 class="bg-white text-dark" >Datos del Grupo </h3>
                    <div class="row ">
                    <div class="form-group col-md-4  ">
                     <label>Marca</label>
                      <input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="text"
                        name="marca"
                        value={this.state.marca}
                        onChange={(value)=>this.setState({marca:value.target.value})}
                      /> 
                      </div> 
                    <div class="form-group col-md-4 ">
                     <label>Modelo</label>
                      <input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="text"
                        name="modelo"
                        value={this.state.modelo}
                        onChange={(value)=>this.setState({modelo:value.target.value})}
                      /> 
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Potencia KVA</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="potencia"
                        value={this.state.potencia}
                        onChange={(value)=>this.setState({potencia:value.target.value})}
                      /> 
                      </div>
                    </div> 

                    <div class="row ">
                    <div class="form-group col-md-4 ">
                     <label>Motor Marca</label>
                      <input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="text"
                        name="motorMarca"
                        value={this.state.motorMarca}
                        onChange={(value)=>this.setState({motorMarca:value.target.value})}
                      /> 
                      </div> 
                    <div class="form-group col-md-4 ">
                     <label>Modelo Motor</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="text"
                        name="motorModelo"
                        value={this.state.motorModelo}
                        onChange={(value)=>this.setState({motorModelo:value.target.value})}
                      /> 
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Motor Numero</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="text"
                        name="motorNumero"
                        value={this.state.motorNumero}
                        onChange={(value)=>this.setState({motorNumero:value.target.value})}
                      /> 
                      </div>
                    </div> 

                      
                  
                    <div class="row ">
                    <div class="form-group col-md-3 ">
                     <label>Fecha Anterior</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="date"
                        name="fechaAnterior"
                        value={this.state.fechaAnterior}
                        onChange={(value)=>this.setState({fechaAnterior:value.target.value})}
                      /> 
                      </div> 
                    <div class="form-group col-md-3 ">
                     <label>Fecha Actual</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="date"
                        name="fechaActual"
                        value={this.state.fechaActual}
                        onChange={(value)=>this.setState({fechaActual:value.target.value})}
                      /> 
                      </div> 
                      <div class="form-group col-md-3 ">
                      <label>Horometro Anterior</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="horometroAnterior"
                        value={this.state.horometroAnterior}
                        onChange={(value)=>this.setState({horometroAnterior:value.target.value})}
                      /> 
                      </div>
                      <div class="form-group col-md-3 ">
                      <label>Horometro Actual</label>
                      <input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="horometroActual"
                        value={this.state.horometroActual}
                        onChange={(value)=>this.setState({horometroActual:value.target.value})}
                      /> 
                      </div>
                    </div> 
                    </div>
                    
                    <div class="border border-info my-2 p-2">
                    <h3 class="bg-white text-dark" >Cabina</h3>
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Cabina Acustica</label>
                      <Input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="select"
                        name="cabinaAcustica"
                        value={this.state.cabinaAcustica}
                        onChange={(value)=>this.setState({cabinaAcustica:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Estado Pintura</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="cabinaPintura"
                        value={this.state.cabinaPintura}
                        onChange={(value)=>this.setState({cabinaPintura:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                       </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Estado Cerradura</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="cabinaCerradura"
                        value={this.state.cabinaCerradura}
                        onChange={(value)=>this.setState({cabinaCerradura:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                      </div>
                    </div> 
                    </div>

                   

                   <div class="border border-info my-2 p-2">
                    <h3 class="bg-white text-dark" >Bateria</h3>
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Cantidad de Baterias</label>
                      <Input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="number"
                        name="bateriaCantidad"
                        value={this.state.bateriaCantidad}
                        onChange={(value)=>this.setState({bateriaCantidad:value.target.value})}
                      > 
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Nivel de Electrolito</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="bateriaAcido"
                        value={this.state.bateriaAcido}
                        onChange={(value)=>this.setState({bateriaAcido:value.target.value})}
                      > 
                      <option value="A Nivel">A nivel</option>
                      <option value="Medio">Medio</option>
                      <option value="Bajo">Bajo</option>
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Conexion</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="bateriaConexion"
                        value={this.state.bateriaConexion}
                        onChange={(value)=>this.setState({bateriaConexion:value.target.value})}
                      > 
                      <option value="N/A">N/A</option>
                      <option value="Serie">Serie</option>
                      <option value="Paralelo">Paralelo</option>
                      </Input>
                      </div>
                    </div> 
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Marca/s</label>
                      <Input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="text"
                        name="bateriaMarca"
                        value={this.state.bateriaMarca}
                        onChange={(value)=>this.setState({bateriaMarca:value.target.value})}
                      > 
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Estado de Bateria/s</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="bateriaAcido"
                        value={this.state.bateriaAcido}
                        onChange={(value)=>this.setState({bateriaAcido:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Estado de bornes y cables</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="bateriaConexion"
                        value={this.state.bateriaConexion}
                        onChange={(value)=>this.setState({bateriaConexion:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                      </div>
                    </div>
                     <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Tension parado</label>
                      <Input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="number"
                        name="tensionParado"
                        value={this.state.tensionParado}
                        onChange={(value)=>this.setState({tensionParado:value.target.value})}
                      > 
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Tension arranque</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="tensionArranque"
                        value={this.state.tensionArranque}
                        onChange={(value)=>this.setState({tensionArranque:value.target.value})}
                      > 
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Tension en marcha</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="tensionMarcha"
                        value={this.state.tensionMarcha}
                        onChange={(value)=>this.setState({tensionMarcha:value.target.value})}
                      > 
                      </Input>
                      </div>
                    </div>
                     <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Fecha de instalacion</label>
                      <Input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="date"
                        name="fechaInstalacion"
                        value={this.state.fechaInstalacion}
                        onChange={(value)=>this.setState({fechaInstalacion:value.target.value})}
                      > 
                      </Input>
                     </div>
                     </div>
                    </div>

                   
                   <div class="border border-info my-2 p-2">
                    <h3 class="bg-white text-dark" >Motor</h3>
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Perdida de combustible</label>
                      <Input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="select"
                        name="perdidaCombustible"
                        value={this.state.perdidaCombustible}
                        onChange={(value)=>this.setState({perdidaCombustible:value.target.value})}
                      > 
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                     </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Perdida de Aceite</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="perdidaAceite"
                        value={this.state.perdidaAceite}
                        onChange={(value)=>this.setState({perdidaAceite:value.target.value})}
                      > 
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Perdida de Agua</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="perdidaAgua"
                        value={this.state.perdidaAgua}
                        onChange={(value)=>this.setState({perdidaAgua:value.target.value})}
                      > 
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                      </Input>
                      </div>
                    </div> 
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Estado de mangueras</label>
                      <Input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="select"
                        name="estadoMangueras"
                        value={this.state.estadoMangueras}
                        onChange={(value)=>this.setState({estadoMangueras:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Estado de Filtro de Aire</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="estadoFiltroAire"
                        value={this.state.estadoFiltroAire}
                        onChange={(value)=>this.setState({estadoFiltroAire:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Estado de partes Rodantes</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="estadoRodantes"
                        value={this.state.estadoRodantes}
                        onChange={(value)=>this.setState({estadoRodantes:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                      </div>
                    </div>
                     <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Nivel de Aceite</label>
                      <Input
                        className="form-control bg-white text-dark "
                        readOnly={editarModal}
                        type="select"
                        name="nivelAceite"
                        value={this.state.nivelAceite}
                        onChange={(value)=>this.setState({nivelAceite:value.target.value})}
                      > 
                      <option value="Bajo">Bajo</option>
                      <option value="Medio">Medio</option>
                      <option value="Correcto">Correcto</option>
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Nivel de combustible</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="nivelCombustible"
                        value={this.state.nivelCombustible}
                        onChange={(value)=>this.setState({nivelCombustible:value.target.value})}
                      >
                      <option value="N/A">N/A</option>
                      <option value="Vacio">Vacio</option>
                      <option value="25%">25%</option>
                      <option value="50%">50%</option>
                      <option value="75%">75%</option>
                      <option value="100%">100%</option> 
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Presion de Aceite</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="presionAceite"
                        value={this.state.presionAceite}
                        onChange={(value)=>this.setState({presionAceite:value.target.value})}
                      > 
                      </Input>
                      </div>
                    </div>
                     
                    </div>

                    <div class="border border-info my-2 p-2">
                    <h3 class="bg-white text-dark" >Generador</h3>
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                      <label>Tension RS</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="tensionRs"
                        value={this.state.tensionRs}
                        onChange={(value)=>this.setState({tensionRs:value.target.value})}
                      > 
                      </Input>
                      </div>
                      <div class="form-group col-md-4 ">
                      <label>Tension RT</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="tensionRt"
                        value={this.state.tensionRt}
                        onChange={(value)=>this.setState({tensionRt:value.target.value})}
                      > 
                      </Input>
                      </div>
                      <div class="form-group col-md-4 ">
                      <label>Tension ST</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="tensionSt"
                        value={this.state.tensionSt}
                        onChange={(value)=>this.setState({tensionSt:value.target.value})}
                      > 
                      </Input>
                      </div>
                      </div>
                      <div class="row ">
                    <div class="form-group col-md-4 ">
                      <label>Tension RN</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="tensionRn"
                        value={this.state.tensionRn}
                        onChange={(value)=>this.setState({tensionRn:value.target.value})}
                      > 
                      </Input>
                      </div>
                      <div class="form-group col-md-4 ">
                      <label>Tension SN</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="tensionSn"
                        value={this.state.tensionSn}
                        onChange={(value)=>this.setState({tensionSn:value.target.value})}
                      > 
                      </Input>
                      </div>
                      <div class="form-group col-md-4 ">
                      <label>Tension TN</label>
                      <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="number"
                        name="tensionTn"
                        value={this.state.tensionTn}
                        onChange={(value)=>this.setState({tensionTn:value.target.value})}
                      > 
                      </Input>
                      </div>
                      </div>

                    </div>
                    <div class="border border-info my-2 p-2">
                    <div class="form-group col-md-12 ">
                    <label>Se deja equipo en automático luego de finalización de servicio (SI/NO):
                    </label>
                     <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="select"
                        name="autMan"
                        value={this.state.autMan}
                        onChange={(value)=>this.setState({autMan:value.target.value})}
                      >
                      <option value="Si">Si</option>
                      <option value="No">No</option> 
                      </Input>   
                    </div>
                    </div>
                    <div class="border border-info my-2 p-2">
                    <div class="form-group col-md-12 ">
                    <label>Observaciones:</label>
                     <Input
                        className="form-control bg-white text-dark"
                        readOnly={editarModal}
                        type="textarea"
                        name="autMan"
                        value={this.state.autMan}
                        onChange={(value)=>this.setState({autMan:value.target.value})}
                      >
                      </Input>   
                    </div>
                    </div>
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.setModalEditar}>
                        Cerrar
                    </Button>
                    <Button color="warning" disabled={editarModal} 
                    onClick={()=>this.onClickUpdate()}>
                        Update
                    </Button>
                   
                </ModalFooter>
            </Modal> 
            <Modal isOpen={this.state.modalEliminar} toggle={this.setModalEliminar}>
                <ModalBody>
                  Estás Seguro que deseas eliminar Abono
                </ModalBody>
                <ModalFooter>
                  <button className="btn btn-danger" onClick={()=>this.onClickDelete()}>
                    Sí
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={()=>{this.setState({modalEliminar:false})}}
                  >
                    No
                  </button>
                </ModalFooter>
              </Modal>

               <Modal  isOpen={this.state.modalCrear} toggle={this.setModalCrear} size="lg">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                   Abono
                  </h3>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    onClick={this.setModalCrear}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </div>
                <ModalBody >
                
                <div class="row ">
                    
                      <div class="form-group col-md-4 ">
                     <label>ID Tecnico</label>
                      <Input
                        className="form-control form-control bg-white text-dark "
                       
                        type="select"
                        name="tecnico"
                        value={nombreTecnico}
                        onChange={this.setTecnico}
                      > 
                      <option value ="">{nombreTecnico}</option>
                       {this.state.listTecnico.map((data,i)=>{
                              return(
                                
                                <option value={data.idTecnico}>{data.nombre}</option>
                            ); 
                              }
                        )}
                        </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Empresa</label>
                      <Input
                        className="form-control form-control bg-white text-dark  "
                        
                        type="select"
                        name="empresa"
                        value={nombreEmpresa}
                        onChange={this.setEmpresa}
                      > 
                      <option value ="">{nombreEmpresa}</option>
                       {this.state.listEmpresa.map((data,i)=>{
                              return(
                                
                                <option value={data.idEmpresa}>{data.nombre}</option>
                            ); 
                              }
                        )}
                      </Input>
                      </div>
                    </div> 

                    <div class="border border-info my-2 p-2"> 
                    <h3 class="bg-white text-dark" >Datos del Grupo </h3>
                    <div class="row ">
                    <div class="form-group col-md-4  ">
                     <label>Marca</label>
                      <input
                        className="form-control bg-white text-dark "
                        
                        type="text"
                        name="marca"
                        value={this.state.marca}
                        onChange={(value)=>this.setState({marca:value.target.value})}
                      /> 
                      </div> 
                    <div class="form-group col-md-4 ">
                     <label>Modelo</label>
                      <input
                        className="form-control bg-white text-dark "
                        
                        type="text"
                        name="modelo"
                        value={this.state.modelo}
                        onChange={(value)=>this.setState({modelo:value.target.value})}
                      /> 
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Potencia KVA</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="potencia"
                        value={this.state.potencia}
                        onChange={(value)=>this.setState({potencia:value.target.value})}
                      /> 
                      </div>
                    </div> 

                    <div class="row ">
                    <div class="form-group col-md-4 ">
                     <label>Motor Marca</label>
                      <input
                        className="form-control bg-white text-dark "
                        
                        type="text"
                        name="motorMarca"
                        value={this.state.motorMarca}
                        onChange={(value)=>this.setState({motorMarca:value.target.value})}
                      /> 
                      </div> 
                    <div class="form-group col-md-4 ">
                     <label>Modelo Motor</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="text"
                        name="motorModelo"
                        value={this.state.motorModelo}
                        onChange={(value)=>this.setState({motorModelo:value.target.value})}
                      /> 
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Motor Numero</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="text"
                        name="motorNumero"
                        value={this.state.motorNumero}
                        onChange={(value)=>this.setState({motorNumero:value.target.value})}
                      /> 
                      </div>
                    </div> 

                      
                  
                    <div class="row ">
                    <div class="form-group col-md-3 ">
                     <label>Fecha Anterior</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="date"
                        name="fechaAnterior"
                        value={this.state.fechaAnterior}
                        onChange={(value)=>this.setState({fechaAnterior:value.target.value})}
                      /> 
                      </div> 
                    <div class="form-group col-md-3 ">
                     <label>Fecha Actual</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="date"
                        name="fechaActual"
                        value={this.state.fechaActual}
                        onChange={(value)=>this.setState({fechaActual:value.target.value})}
                      /> 
                      </div> 
                      <div class="form-group col-md-3 ">
                      <label>Horometro Anterior</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="horometroAnterior"
                        value={this.state.horometroAnterior}
                        onChange={(value)=>this.setState({horometroAnterior:value.target.value})}
                      /> 
                      </div>
                      <div class="form-group col-md-3 ">
                      <label>Horometro Actual</label>
                      <input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="horometroActual"
                        value={this.state.horometroActual}
                        onChange={(value)=>this.setState({horometroActual:value.target.value})}
                      /> 
                      </div>
                    </div> 
                    </div>
                    
                    <div class="border border-info my-2 p-2">
                    <h3 class="bg-white text-dark" >Cabina</h3>
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Cabina Acustica</label>
                      <Input
                        className="form-control bg-white text-dark "
                        
                        type="select"
                        name="cabinaAcustica"
                        value={this.state.cabinaAcustica}
                        onChange={(value)=>this.setState({cabinaAcustica:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Estado Pintura</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="select"
                        name="cabinaPintura"
                        value={this.state.cabinaPintura}
                        onChange={(value)=>this.setState({cabinaPintura:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                       </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Estado Cerradura</label>
                      <Input
                        className="form-control bg-white text-dark"
                       
                        type="select"
                        name="cabinaCerradura"
                        value={this.state.cabinaCerradura}
                        onChange={(value)=>this.setState({cabinaCerradura:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                      </div>
                    </div> 
                    </div>

                   

                   <div class="border border-info my-2 p-2">
                    <h3 class="bg-white text-dark" >Bateria</h3>
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Cantidad de Baterias</label>
                      <Input
                        className="form-control bg-white text-dark "
                        
                        type="number"
                        name="bateriaCantidad"
                        value={this.state.bateriaCantidad}
                        onChange={(value)=>this.setState({bateriaCantidad:value.target.value})}
                      > 
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Nivel de Electrolito</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="select"
                        name="bateriaAcido"
                        value={this.state.bateriaAcido}
                        onChange={(value)=>this.setState({bateriaAcido:value.target.value})}
                      > 
                      <option value="A Nivel">A nivel</option>
                      <option value="Medio">Medio</option>
                      <option value="Bajo">Bajo</option>
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Conexion</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="select"
                        name="bateriaConexion"
                        value={this.state.bateriaConexion}
                        onChange={(value)=>this.setState({bateriaConexion:value.target.value})}
                      > 
                      <option value="N/A">N/A</option>
                      <option value="Serie">Serie</option>
                      <option value="Paralelo">Paralelo</option>
                      </Input>
                      </div>
                    </div> 
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Marca/s</label>
                      <Input
                        className="form-control bg-white text-dark "
                        
                        type="text"
                        name="bateriaMarca"
                        value={this.state.bateriaMarca}
                        onChange={(value)=>this.setState({bateriaMarca:value.target.value})}
                      > 
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Estado de Bateria/s</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="select"
                        name="bateriaAcido"
                        value={this.state.bateriaAcido}
                        onChange={(value)=>this.setState({bateriaAcido:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Estado de bornes y cables</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="select"
                        name="bateriaConexion"
                        value={this.state.bateriaConexion}
                        onChange={(value)=>this.setState({bateriaConexion:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                      </div>
                    </div>
                     <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Tension parado</label>
                      <Input
                        className="form-control bg-white text-dark "
                       
                        type="number"
                        name="tensionParado"
                        value={this.state.tensionParado}
                        onChange={(value)=>this.setState({tensionParado:value.target.value})}
                      > 
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Tension arranque</label>
                      <Input
                        className="form-control bg-white text-dark"
                       
                        type="number"
                        name="tensionArranque"
                        value={this.state.tensionArranque}
                        onChange={(value)=>this.setState({tensionArranque:value.target.value})}
                      > 
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Tension en marcha</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="tensionMarcha"
                        value={this.state.tensionMarcha}
                        onChange={(value)=>this.setState({tensionMarcha:value.target.value})}
                      > 
                      </Input>
                      </div>
                    </div>
                     <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Fecha de instalacion</label>
                      <Input
                        className="form-control bg-white text-dark "
                        
                        type="date"
                        name="fechaInstalacion"
                        value={this.state.fechaInstalacion}
                        onChange={(value)=>this.setState({fechaInstalacion:value.target.value})}
                      > 
                      </Input>
                     </div>
                     </div>
                    </div>

                   
                   <div class="border border-info my-2 p-2">
                    <h3 class="bg-white text-dark" >Motor</h3>
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Perdida de combustible</label>
                      <Input
                        className="form-control bg-white text-dark "
                        
                        type="select"
                        name="perdidaCombustible"
                        value={this.state.perdidaCombustible}
                        onChange={(value)=>this.setState({perdidaCombustible:value.target.value})}
                      > 
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                     </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Perdida de Aceite</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="select"
                        name="perdidaAceite"
                        value={this.state.perdidaAceite}
                        onChange={(value)=>this.setState({perdidaAceite:value.target.value})}
                      > 
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Perdida de Agua</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="select"
                        name="perdidaAgua"
                        value={this.state.perdidaAgua}
                        onChange={(value)=>this.setState({perdidaAgua:value.target.value})}
                      > 
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                      </Input>
                      </div>
                    </div> 
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Estado de mangueras</label>
                      <Input
                        className="form-control bg-white text-dark "
                        
                        type="select"
                        name="estadoMangueras"
                        value={this.state.estadoMangueras}
                        onChange={(value)=>this.setState({estadoMangueras:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Estado de Filtro de Aire</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="select"
                        name="estadoFiltroAire"
                        value={this.state.estadoFiltroAire}
                        onChange={(value)=>this.setState({estadoFiltroAire:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Estado de partes Rodantes</label>
                      <Input
                        className="form-control bg-white text-dark"
                       
                        type="select"
                        name="estadoRodantes"
                        value={this.state.estadoRodantes}
                        onChange={(value)=>this.setState({estadoRodantes:value.target.value})}
                      > 
                      <option value="Malo">Malo</option>
                      <option value="Regular">Regular</option>
                      <option value="Bueno">Bueno</option>
                      </Input>
                      </div>
                    </div>
                     <div class="row ">
                    <div class="form-group col-md-4 ">
                    <label>Nivel de Aceite</label>
                      <Input
                        className="form-control bg-white text-dark "
                        
                        type="select"
                        name="nivelAceite"
                        value={this.state.nivelAceite}
                        onChange={(value)=>this.setState({nivelAceite:value.target.value})}
                      > 
                      <option value="Bajo">Bajo</option>
                      <option value="Medio">Medio</option>
                      <option value="Correcto">Correcto</option>
                      </Input>
                     </div> 
                    <div class="form-group col-md-4 ">
                    
                     <label>Nivel de combustible</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="select"
                        name="nivelCombustible"
                        value={this.state.nivelCombustible}
                        onChange={(value)=>this.setState({nivelCombustible:value.target.value})}
                      >
                      <option value="N/A">N/A</option>
                      <option value="Vacio">Vacio</option>
                      <option value="25%">25%</option>
                      <option value="50%">50%</option>
                      <option value="75%">75%</option>
                      <option value="100%">100%</option> 
                      </Input>
                      </div> 
                      <div class="form-group col-md-4 ">
                      <label>Presion de Aceite</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="presionAceite"
                        value={this.state.presionAceite}
                        onChange={(value)=>this.setState({presionAceite:value.target.value})}
                      > 
                      </Input>
                      </div>
                    </div>
                     
                    </div>

                    <div class="border border-info my-2 p-2">
                    <h3 class="bg-white text-dark" >Generador</h3>
                    <div class="row ">
                    <div class="form-group col-md-4 ">
                      <label>Tension RS</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="tensionRs"
                        value={this.state.tensionRs}
                        onChange={(value)=>this.setState({tensionRs:value.target.value})}
                      > 
                      </Input>
                      </div>
                      <div class="form-group col-md-4 ">
                      <label>Tension RT</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="tensionRt"
                        value={this.state.tensionRt}
                        onChange={(value)=>this.setState({tensionRt:value.target.value})}
                      > 
                      </Input>
                      </div>
                      <div class="form-group col-md-4 ">
                      <label>Tension ST</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="tensionSt"
                        value={this.state.tensionSt}
                        onChange={(value)=>this.setState({tensionSt:value.target.value})}
                      > 
                      </Input>
                      </div>
                      </div>
                      <div class="row ">
                    <div class="form-group col-md-4 ">
                      <label>Tension RN</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="tensionRn"
                        value={this.state.tensionRn}
                        onChange={(value)=>this.setState({tensionRn:value.target.value})}
                      > 
                      </Input>
                      </div>
                      <div class="form-group col-md-4 ">
                      <label>Tension SN</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="tensionSn"
                        value={this.state.tensionSn}
                        onChange={(value)=>this.setState({tensionSn:value.target.value})}
                      > 
                      </Input>
                      </div>
                      <div class="form-group col-md-4 ">
                      <label>Tension TN</label>
                      <Input
                        className="form-control bg-white text-dark"
                        
                        type="number"
                        name="tensionTn"
                        value={this.state.tensionTn}
                        onChange={(value)=>this.setState({tensionTn:value.target.value})}
                      > 
                      </Input>
                      </div>
                      </div>

                    </div>
                    <div class="border border-info my-2 p-2">
                    <div class="form-group col-md-12 ">
                    <label>Se deja equipo en automático luego de finalización de servicio (SI/NO):
                    </label>
                     <Input
                        className="form-control bg-white text-dark"
                        
                        type="select"
                        name="autMan"
                        value={this.state.autMan}
                        onChange={(value)=>this.setState({autMan:value.target.value})}
                      >
                      <option value="Si">Si</option>
                      <option value="No">No</option> 
                      </Input>   
                    </div>
                    </div>
                    <div class="border border-info my-2 p-2">
                    <div class="form-group col-md-12 ">
                    <label>Observaciones:</label>
                     <Input
                        className="form-control bg-white text-dark"
                        
                        type="textarea"
                        name="autMan"
                        value={this.state.autMan}
                        onChange={(value)=>this.setState({autMan:value.target.value})}
                      >
                      </Input>   
                    </div>
                    </div>
                    
                </ModalBody>
                <ModalFooter>
                     <Button color="secondary" onClick={this.setModalCrear}>
                        Cerrar
                    </Button>
                    <Button color="warning" 
                    onClick={()=>this.onClickSave()}>
                        Crear
                    </Button>
                   
                </ModalFooter>
            </Modal>

            
      </>
    )
  }

  



  
  
  

  
   
}

export default TablesAbono;
