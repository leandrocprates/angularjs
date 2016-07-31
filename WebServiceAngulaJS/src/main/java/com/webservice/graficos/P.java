/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webservice.graficos;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * Responsavel por adicionar as cores ao Grafico
 * @author ariane
 */
@XmlRootElement
public class P {
    
    private String role;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    
    
}
