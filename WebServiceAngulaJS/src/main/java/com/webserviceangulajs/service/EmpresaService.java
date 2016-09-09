/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webserviceangulajs.service;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;
import javax.xml.bind.annotation.XmlRootElement;
import javax.ws.rs.Path;

/**
 *
 * @author ariane
 */



@Path("empresa")
public class EmpresaService {

    
    @Context
    private UriInfo context;



    /**
     * Retrieves representation of an instance of com.webservice.graficos.Como
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Empresa getXml() {
        
        Registro r1   = new Registro();
        //r1.setId(1);
        r1.setValue("SP");

        
        Empresa empresa  = new  Empresa();
        empresa.setId(4);
        empresa.setNome("App");
        empresa.setRegistro(r1);
        
        
        return empresa;
        
    }    
    
    
}



@XmlRootElement
 class Empresa {
    private int id;
    private String nome;
    
    private Registro registro= new Registro() ; 

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Registro getRegistro() {
        return registro;
    }

    public void setRegistro(Registro registro) {
        this.registro = registro;
    }
    
    
    
}
