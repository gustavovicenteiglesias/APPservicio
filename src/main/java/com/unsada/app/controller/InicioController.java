package com.unsada.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping
public class InicioController {
	@RequestMapping("/admin/tablaTecnico")
	public ModelAndView login() {
		return new ModelAndView("inicio");
	}
	@RequestMapping("/admin/map")
	public ModelAndView login1() {
		return new ModelAndView("inicio");
	}
	
	@RequestMapping("/admin/tables")
	public ModelAndView login2() {
		return new ModelAndView("inicio");
	}
	
	@RequestMapping("/")
	public ModelAndView login3() {
		return new ModelAndView("inicio");
	}
}
