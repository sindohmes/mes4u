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

import com.sindoh.sdmes.model.JobDispatchOperations;

import com.sindoh.sdmes.model.JobSerialNumbersView;
import com.sindoh.sdmes.repository.JobDispatchOperationsRepository;
import com.sindoh.sdmes.repository.JobDispatchesRepository;
import com.sindoh.sdmes.repository.JobDispatchesViewRepository;
import com.sindoh.sdmes.repository.JobSerialNumbersViewRepository;
import com.sindoh.sdmes.repository.MtlLinesRepository;
import com.sindoh.sdmes.service.ProductionService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/production", produces = "application/json;charset=UTF-8")
public class ProductionApiController {
	@Autowired
	JobDispatchesViewRepository jdvRepository;
	
	@Autowired
	JobDispatchesRepository jdRepository;
	
	@Autowired
	JobSerialNumbersViewRepository jsnRepository;
	
	@Autowired
	JobDispatchOperationsRepository jdoRepository;
	
	@Autowired
	MtlLinesRepository lineRepository;
	
	@Autowired
	ProductionService productionService;

	@GetMapping(value = "/jobDispatchesV")
	public Map<String, Object> getJobDispatchesView(@RequestParam Map<String, Object> params) throws Exception {
		return productionService.getJobDispatchesView(params);
	}	

	@PutMapping(value = "/jobDispatches/{id}")
	public ResponseEntity<?> updateJobDispatches(@RequestBody Map<String, Object> params, @PathVariable("id") Long id) throws Exception {
		try {
			productionService.updateJobDispatches(params, id);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	@GetMapping(value = "/jobSerialNumbers")
	public List<JobSerialNumbersView> getJobSerialNumbers(@RequestParam("id") String id) throws Exception {
		return productionService.getJobSerialNumbers(id);	
	}
	
	@GetMapping(value = "/jobDispatchOperations")
	public List<JobDispatchOperations> getJobDispatchOperations(@RequestParam Map<String, Object> params) throws Exception {		
		return productionService.getJobDispatchOperations(params);
	}
	
	@PutMapping(value = "/jobDispatchOperations")
	public ResponseEntity<?> updateJobDispatchOperations(@RequestBody JobDispatchOperations params) throws Exception {
		try {
			productionService.updateJobDispatchOperations(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}

	@DeleteMapping(value = "/jobDispatchOperations/{id}")
	public ResponseEntity<?> deleteJobDispatchOperations(@PathVariable("id") Long id) throws Exception {
		try {
			productionService.deleteJobDispatchOperations(id);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}	
	
	@PostMapping(value = "/createJobDispatch")
	public ResponseEntity<?> createJobDispatch(@RequestBody Map<String, Object> params) throws Exception {
		try {
			productionService.createJobDispatch(params);
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	@PostMapping(value = "/createJobSerialNumbers")
	public ResponseEntity<?> createJobSerialNumbers(@RequestBody Map<String, Object> params) throws Exception {
//		try {
			productionService.createJobSerialNumbers(params);
			return ResponseEntity.ok(params);
//		} catch (Exception e) {
//			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
//		}		  		
	}

	@PostMapping(value = "/cancelJobSerialNumbers")
	public ResponseEntity<?> cancelJobSerialNumbers(@RequestBody Map<String, Object> params) throws Exception {
		try {
			productionService.cancelJobSerialNumbers(params);
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}

	@PostMapping(value = "/createJobDpOperations")
	public ResponseEntity<?> createJobDpOperations(@RequestBody Map<String, Object> params) throws Exception {
		try {
			productionService.createJobDpOperations(params);
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}

	@PostMapping(value = "/serialnumStatus")
	public ResponseEntity<?> getSerialnumStatus(@RequestBody Map<String, Object> params) {
		try {
			return ResponseEntity.ok(productionService.getSerialnumStatus(params));
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	
}
