/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webserviceangulajs.service;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Path;
import javax.ws.rs.GET;

/**
 * REST Web Service
 *
 * @author lprates
 */
@Path("/lerDiretorio")
public class lerDiretorio {

    @Context
    private UriInfo context;

    public lerDiretorio() {
    }

    @GET
    public void getXml() {
        InputStream inStream = getClass().getClassLoader().getResourceAsStream("script");
        BufferedReader buffer= new BufferedReader(new InputStreamReader(inStream));
        String linha;
        try{
            while ( (linha = buffer.readLine()) != null ){ 
                System.out.println(linha);
            }
            
        }catch(Exception ex){        
            System.out.println(ex);
        }
        
    }
    
}
