<?php

namespace Controller;

class Controller
{
    // Variables Atribute
    var $controllerName;
    var $controllerMethod;

    // Methods untuk mengambil semua atribut

    public function getControllerAtribute()
    {
        return [
            "ControllerName" => $this->controllerName,
            "Method" => $this->controllerMethod
        ];
    }
}
