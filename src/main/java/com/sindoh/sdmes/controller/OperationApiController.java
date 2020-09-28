package com.sindoh.sdmes.controller;

import java.math.BigDecimal;
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

import com.sindoh.sdmes.model.MtlPackingNumbersView;
import com.sindoh.sdmes.service.OperationService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/operation", produces = "application/json;charset=UTF-8")
public class OperationApiController {
	@Autowired
	OperationService operationService;
	
	@GetMapping(value = "/partStatus")
	public List<Map<String, Object>> getPartStatus(@RequestParam("id") String id) {		
		return operationService.getPartStatus(Integer.parseInt(id));
	}
	
	@GetMapping(value = "/operationSettingList")
	public List<Map<String, Object>> getOperationSettingList(@RequestParam Map<String, Object> params) {		
		return operationService.getOperationSettingList(params);
	}

	@GetMapping(value = "/userOperation")
	public String getUserOperation(@RequestParam Map<String, Object> params) {
		return operationService.getUserOperation(params);	
	}

	@PostMapping(value = "/userOperation")
	public ResponseEntity<?> createUserOperation(@RequestBody Map<String, Object> params) {
		try {
			operationService.createUserOperation(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}		  		
	}
	
	@DeleteMapping(value = "/userOperation/{userid}")
	public ResponseEntity<?> deleteUserOperation(@PathVariable("userid") Long userid) {
		try {
			operationService.deleteUserOperation(userid);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PostMapping(value = "/dispatchOpHisChk")
	public ResponseEntity<?> dispatchOpHisChk(@RequestBody Map<String, Object> params) {
		try {
			return ResponseEntity.ok(operationService.dispatchOpHisChk(params));
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PostMapping(value = "/createTraceOpHistory")
	public ResponseEntity<?> createTraceOpHistory(@RequestBody Map<String, Object> params) {		
		try {
			operationService.createTraceOpHistory(params);
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PostMapping(value = "/createInspectionOperation")
	public ResponseEntity<?> createInspectionOperation(@RequestBody Map<String, Object> params) {		
		try {
			operationService.createInspectionOperation(params);
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/getInLineList")
	public List<Map<String, Object>> getInLineList(@RequestParam Map<String, Object> params) {
		List<Map<String, Object>> list = operationService.getInLineList(params);  	
		return list;
	}	
	
	@PostMapping(value = "/assyBarcodeCheck")
	public ResponseEntity<?> checkAssyBarcodeInfo(@RequestBody Map<String, Object> params) {		
		try {
			System.out.println(params);
			operationService.checkAssyBarcodeInfo(params);
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}	  		
	}
	
	@GetMapping(value = "/packing")
	public List<MtlPackingNumbersView> getPacking(@RequestParam("packing_number") String packingNumber) {
		List<MtlPackingNumbersView> packing = operationService.getPacking(packingNumber);
		return packing;
	}

	@PostMapping(value = "/packing")
	public ResponseEntity<?> insertPacking(@RequestBody Map<String, Object> params) {
		try {
			Map<String,Object> map = operationService.insertPacking(params);
			return ResponseEntity.ok(map);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	@DeleteMapping(value = "/packing")
	public ResponseEntity<?> cancelPacking(@RequestBody Map<String, Object> params) {
		try {
			Map<String, Object> result = operationService.cancelPacking(params);
			return ResponseEntity.ok(result);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PutMapping(value = "/packing")
	public ResponseEntity<?> printPacking(@RequestBody Map<String, Object> params) {		
		try {
			Map<String, Object> result = operationService.printPacking(params);	
			return ResponseEntity.ok(result);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
		
	@GetMapping(value = "/jobDispatchOpHistoriesView")
	public Map<String, Object> getOpHistory(@RequestParam Map<String, Object> params) {
		return operationService.getOpHistory(params);
	}
	
	// SOL - Scan Assy Barcode
	@PostMapping(value = "/solScanBarcode")
	public ResponseEntity<?> createOpHistory(@RequestBody Map<String, Object> params) {		
		try {
			BigDecimal id = BigDecimal.valueOf((Integer)params.get("p_user_id"));
			params.put("p_user_id", id);
			
			operationService.createOpHistory(params);
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	// EOL - Scan Assy Barcode
	@PostMapping(value = "/eolScanBarcode")
	public ResponseEntity<?> createEolHistory(@RequestBody Map<String, Object> params) {		
		try {
			BigDecimal id = BigDecimal.valueOf(Integer.parseInt(params.get("p_user_id").toString()));
			params.put("p_user_id", id);
			
			operationService.createEolHistory(params); 
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/getOpFailed")
	public List<Map<String, Object>> getOpFailed(@RequestParam Map<String, Object> params) {
		List<Map<String, Object>> list = operationService.getOpFailed(params);
		return list;
	}	
	
	@PostMapping(value = "/boxBarcodeCheck")
	public ResponseEntity<?> checkBoxBarcodeInfo(@RequestBody Map<String, Object> params) {		
		try {
			operationService.checkBoxBarcodeInfo(params);  		
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PostMapping(value = "/createRepairOperation")
	public ResponseEntity<?> createRepairOperation(@RequestBody Map<String, Object> params) {
		try {
			params.put("p_user_id", new BigDecimal(Integer.parseInt(params.get("p_user_id").toString())));
			operationService.createRepairOperation(params);
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PostMapping(value = "/updateRepairOperation")
	public ResponseEntity<?> updateRepairOperation(@RequestBody Map<String, Object> params) {
		try {
			params.put("p_repair_history_id", params.get("p_repair_history_id")!=null?params.get("p_repair_history_id").toString():null);
			params.put("p_user_id", new BigDecimal(Integer.parseInt(params.get("p_user_id").toString())));
			operationService.createRepairOperation(params);
			return ResponseEntity.ok(params);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/repairHistoryView")
	public Map<String, Object> repairHistoryView(@RequestParam Map<String, Object> params) throws Exception {
		return operationService.repairHistoryView(params);
	}
	
	@GetMapping(value = "/defectcodelist")
	public List<Map<String, Object>> defectcodelist(@RequestParam Map<String, Object> params) {
		List<Map<String, Object>> list = operationService.getDefectCodes(params);
		return list;
		
	}
	
	@GetMapping(value = "/repaircodelist")
	public List<Map<String, Object>> repaircodelist(@RequestParam Map<String, Object> params) {
		List<Map<String, Object>> list = operationService.getRepairCodes(params);
		return list;
		
	}
	
}
