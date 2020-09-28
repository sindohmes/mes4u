package com.sindoh.sdmes.controller;

import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sindoh.sdmes.model.MesPrintingPrograms;
import com.sindoh.sdmes.model.MesSystems;
import com.sindoh.sdmes.service.SystemService;
import com.sindoh.sdmes.util.Casting;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/system", produces = "application/json;charset=UTF-8")
public class SystemApiController {
	@Autowired
	SystemService systemService;

	@GetMapping(value = "/mesSystems/{TYPE}")
	public List<MesSystems> getMesSystems(@PathVariable("TYPE") String type) throws Exception {
		List<MesSystems> list = systemService.getMesSystems(type);
		return list;
	}
	
	@PostMapping(value = "/mesSystems")
	public ResponseEntity<?> createMesSystems(@RequestBody MesSystems params) throws Exception {
		try {
			systemService.createMesSystems(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	@PutMapping(value = "/mesSystems")
	public ResponseEntity<?> updateMesSystems(@RequestBody MesSystems params) throws Exception {
		try {
			systemService.updateMesSystems(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	@DeleteMapping(value = "/mesSystems/{id}")
	public ResponseEntity<?> deleteMesSystems(@PathVariable("id") Long id) throws Exception {
		try {
			systemService.deleteMesSystems(id);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}

	@GetMapping(value = "/printingProgramSystems/{id}")
	public MesSystems getPrintingProgramsystems(@PathVariable("id") Long id) throws Exception {
		MesSystems val = systemService.getPrintingProgramSystems(id);
		return val;
	}
	
	@PostMapping(value = "/callURLProc/{proc}")
	public ResponseEntity<?> callURLProc(@RequestBody List<String> params, @PathVariable("proc") String proc) throws Exception {
		try {
			return ResponseEntity.ok(systemService.callURLProc(proc, params));
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	@PostMapping(value = "/callFileProc/{proc}")
	public ResponseEntity<?> callFileProc(@RequestBody List<String> params, @PathVariable("proc") String proc) throws Exception {
		try {
			return ResponseEntity.ok(systemService.callFileProc(proc, params));
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	@GetMapping(value = "/mesPrintingPrograms")
	public Map<String,Object> getMesPrintingPrograms(@RequestParam Map<String,Object> params) throws Exception {
		String[] paramList = { "I","I","S","S","S","S" };		
		params = Casting.MapCast(params, paramList);
		return systemService.getMesPrintingPrograms(params);
	}
	
	@GetMapping(value = "/mesPrintingPrograms/group")
	public List<String> getMesPrintingGroupPrograms() throws Exception {
		return systemService.getMesPrintingGroupPrograms();
	}
	
	@GetMapping(value = "/mesPrintingPrograms/list/{type}")
	public List<MesPrintingPrograms> getMesPrintingList(@PathVariable("type") String type) throws Exception {
		return systemService.getMesPrintingList(type);
	}
	
	@GetMapping(value = "/mesPrintingPrograms/job/{id}")
	public List<MesPrintingPrograms> getMesPrintingJobPrograms(@PathVariable("id") Long id) throws Exception {
		List<MesPrintingPrograms> list = systemService.getMesPrintingJobPrograms(id);
		return list;
	}
	
	@GetMapping(value = "/mesPrintingPrograms/{usedoperation}/{id}")
	public MesPrintingPrograms getMesPrintingOperationPrograms(@PathVariable("usedoperation") String usedoperation, @PathVariable("id") Long id) throws Exception {
		MesPrintingPrograms val = systemService.getMesPrintingOperationPrograms(usedoperation, id);
		return val;
	}
	
	@PostMapping(value = "/mesPrintingPrograms")
	public ResponseEntity<?> createMesPrintingPrograms(@RequestBody MesPrintingPrograms params) throws Exception {
		try {
			systemService.createMesPrintingPrograms(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	@PutMapping(value = "/mesPrintingPrograms")
	public ResponseEntity<?> updateMesPrintingPrograms(@RequestBody MesPrintingPrograms params) throws Exception {
		try {
			systemService.updateMesPrintingPrograms(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	@DeleteMapping(value = "/mesPrintingPrograms/{id}")
	public ResponseEntity<?> deleteMesPrintingPrograms(@PathVariable("id") Long id) throws Exception {
		try {
			systemService.deleteMesPrintingPrograms(id);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}

	@PostMapping(value = "/writeLog")
	public ResponseEntity<?> writeLog(@RequestBody Map<String, Object> params) throws Exception {
		try {
			systemService.writeLog(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	@GetMapping(value = "/readLog/{selectDate}")
	public String readLog(@PathVariable("selectDate") String selectDate) throws Exception {
		return systemService.readLog(selectDate);		
	}

}
