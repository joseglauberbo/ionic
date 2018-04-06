
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {
  
  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {
  }

  //recuperar dados do localStorage
  getConfigData(): any {
    return localStorage.getItem(config_key_name);
  }
  //Gravar/modificar dados do localStorage
  //? significa opcional: mandar ou não
  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    let config = {
      showSlide: false,
      name: "",
      username: ""
    }

    if(showSlide) {
      config.showSlide = showSlide;
    }

    if(name) {
      config.name = name;
    }

    if(username) {
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));
  }
}
