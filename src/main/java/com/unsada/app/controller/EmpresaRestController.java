package com.unsada.app.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.unsada.app.modelo.Empresa;
import com.unsada.app.service.EmpresaServiceApi;


@RestController
@RequestMapping(value = "/api/empresa/")
@CrossOrigin("*")
public class EmpresaRestController {
	
	@Autowired
	private EmpresaServiceApi  empresaServiceApi ;   
	
	
	
	@GetMapping(value="/all")
	public Map<String, Object> list(){
		
		HashMap<String,Object> response = new HashMap<String,Object>();
		
		try { 
			List<Empresa> empresaList; 
			empresaList = (List<Empresa>) empresaServiceApi.findAll();
			response.put("message","Successful load");
			response.put("list",empresaList);
			response.put("success",true);
			return response;
			
		} catch (Exception e) {  
			response.put("message",e.getMessage()); 
			response.put("success ",false);
			return response;
		}
		
	}
	
	
	
	@GetMapping(value = "find/{id}" )
	public Map<String, Object> data(@PathVariable("id") Integer id){
		
		HashMap<String,Object> response = new HashMap<String,Object>();
		
		try {   
			
			Optional<Empresa> empresa = empresaServiceApi.findById(id);  
		 
			if (empresa.isPresent()) { 
				response.put("message","Successful load");
				response.put("data",empresa);
				response.put("success",true);
				return response;
			}
			else {
				response.put("message","Not found data");
				response.put("data",null);
				response.put("success",false);
				return response;
			}
			
		} catch (Exception e){ 
			response.put("message",""+e.getMessage()); 
			response.put("success",false);
			return response;
		}
	} 
	
	@GetMapping(value = "/findnombre/{id}")
	
		public Map<String, Object> findByNombre(@PathVariable String id) {
		
		HashMap<String,Object> response = new HashMap<String,Object>();
		
		try {   
			
			Optional<Empresa> empresa = empresaServiceApi.findByNombre(id);  
		 
			if (empresa.isPresent()) { 
				response.put("message","Successful load");
				response.put("data",empresa);
				response.put("success",true);
				return response;
			}
			else {
				response.put("message","Not found data");
				response.put("data",null);
				response.put("success",false);
				return response;
			}
			
		} catch (Exception e){ 
			response.put("message",""+e.getMessage()); 
			response.put("success",false);
			return response;
		}
	}
	
	@GetMapping(value = "/buscarlike/{id}")
	
		public Map<String, Object> findByNombreLike(@PathVariable String id) {
			String likeName = "%"+id+"%";
			HashMap<String,Object> response = new HashMap<String,Object>();
			
			
			 
				try { 
					List<Empresa> empresaList; 
					empresaList = (List<Empresa>) empresaServiceApi.findByNombreLike(likeName);
					response.put("message","Successful load");
					response.put("list",empresaList);
					response.put("success",true);
					return response;
					
				} catch (Exception e) {  
					response.put("message",e.getMessage()); 
					response.put("success ",false);
					return response;
				}
		}
		
		
		
	

	
	
	@PostMapping(value="/create")
	public ResponseEntity<String> create(@RequestBody Empresa data){
		
		try {
			System. out. print("Proceso de guardar datos");
			empresaServiceApi.save(data);
			return new ResponseEntity<>( "Save successful " , HttpStatus.OK);
		} 
		catch (Exception e) {
			System.out.print(e);
			return new ResponseEntity<>( ""+e , HttpStatus.INTERNAL_SERVER_ERROR);
		}

 	}
	
	
	
	@PutMapping(value="/update/{id}")  
	public Map<String, Object> update(@PathVariable("id") Integer id,
			@RequestBody Empresa data ){
		
		HashMap<String,Object> response = new HashMap<String,Object>();
		
		try {  
			data.setIdEmpresa(id);
			empresaServiceApi.save(data);
			response.put("message","Successful update"); 
			response.put("success",true);
			return response;
		} catch (Exception e) {
			response.put("message",e.getMessage()); 
			response.put("success",false);
			return response;
		}
		
	}

	
	
	@DeleteMapping(value="/delete/{id}")
	public Map<String, Object> update(@PathVariable("id") Integer id){
		
		HashMap<String, Object> response = new HashMap<String, Object>();
		
		try {  
			empresaServiceApi.deleteById(id);;
			response.put("message","Successful delete"); 
			response.put("success", true);
			return response; 
		} catch (Exception e) {
			response.put("message",e.getMessage()); 
			response.put("success", false);
			return response;
		}
		
	}

}
