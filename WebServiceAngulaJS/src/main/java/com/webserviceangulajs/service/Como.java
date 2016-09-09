/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webserviceangulajs.service;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * REST Web Service
 *
 * @author ariane
 */
@Path("generic")
public class Como {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of Como
     */
    public Como() {
    }

    /**
     * Retrieves representation of an instance of com.webservice.graficos.Como
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Registro> getXml() {
        
        List<Registro> listaRegistro  = new ArrayList<Registro>();
        Registro r1   = new Registro();
        //r1.setId(1);
        r1.setValue("SP");

        Registro r2   = new Registro();
        //r2.setId(2);
        r2.setValue("RJ");

        Registro r3   = new Registro();
        //r3.setId(3);
        r3.setValue("MG");
        
        listaRegistro.add(r1);
        listaRegistro.add(r2);
        listaRegistro.add(r3);
        
        
        return listaRegistro;
        
    }

    /**
     * PUT method for updating or creating an instance of Como
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putXml(String content) {
    }
}




@XmlRootElement
class Registro{
    //private int id;
    private String value;
/*
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
*/
    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
    
    
    
    
    
    
}