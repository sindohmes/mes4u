package com.sindoh.sdmes.controller;

import java.sql.SQLException;
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

import com.sindoh.sdmes.model.MesSites;
import com.sindoh.sdmes.model.MtlDefectCodes;
import com.sindoh.sdmes.model.MtlItemLabelRules;
import com.sindoh.sdmes.model.MtlItemMasters;
import com.sindoh.sdmes.model.MtlItemPackingRules;
import com.sindoh.sdmes.model.MtlItemProductFamily;
import com.sindoh.sdmes.model.MtlItemSerialRules;
import com.sindoh.sdmes.model.MtlLines;
import com.sindoh.sdmes.model.MtlRepairCodes;
import com.sindoh.sdmes.model.MtlRoutingDetailsView;
import com.sindoh.sdmes.model.MtlRoutings;
import com.sindoh.sdmes.service.MdmService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api/mdm", produces = "application/json;charset=UTF-8")
public class MdmApiController {
	@Autowired
	MdmService mdmService;

	@GetMapping(value = "/operationType")
	public List<Map<String,Object>> getOperationType(@RequestParam("site") Integer site) {
		return mdmService.getOperationType(site);
	}
	
	@GetMapping(value = "/sites")
	public List<MesSites> getSites() {
		return mdmService.getSites();
	}

	@GetMapping(value = "/lines")
	public Map<String, Object> getMtlLinesView(@RequestParam Map<String, Object> params) throws Exception {
		return mdmService.getMtlLinesView(params);
	}
	
	@GetMapping(value = "/lines/{id}")
	public List<MtlLines> getLines(@PathVariable("id") Integer id) throws Exception {
		return mdmService.getLines(id);				
	}
	
	@PostMapping(value = "/lines")
	public ResponseEntity<?> createLine(@RequestBody MtlLines params) throws Exception {
		try {
			mdmService.createLine(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	@PutMapping(value = "/lines")
	public ResponseEntity<?> updateLine(@RequestBody MtlLines params) throws Exception {
		try {
			mdmService.updateLine(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/productFamily/{id}")
	public List<MtlItemProductFamily> getProductFamily(@PathVariable("id") Integer id) throws Exception {
		return mdmService.getProductFamily(id);
	}
	
	@GetMapping(value = "/mtlRoutings")
	public MtlRoutings getRouting(@RequestParam Map<String, Object> params) throws Exception {
		return mdmService.getRouting(params);
	}

	@PostMapping(value = "/mtlRoutings")
	public ResponseEntity<?> createRouting(@RequestBody MtlRoutings params) throws Exception {
		try {
			return ResponseEntity.ok(mdmService.createRouting(params));
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	@PutMapping(value = "/mtlRoutings")
	public ResponseEntity<?> updateRouting(@RequestBody MtlRoutings params) throws Exception {
		try {
			mdmService.updateRouting(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	@GetMapping(value = "/mtlRoutingDetails")
	public List<MtlRoutingDetailsView> getRoutingDetails(@RequestParam("id") Integer id) throws Exception {
		return mdmService.getRoutingDetails(id);
	}

	@PostMapping(value = "/mtlRoutingDetails")
	public ResponseEntity<?> createRoutingDetails(@RequestBody Map<String, Object> params) throws Exception {
		try {
			mdmService.createRoutingDetails(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PutMapping(value = "/mtlRoutingDetails")
	public ResponseEntity<?> updateRoutingDetails(@RequestBody Map<String, Object> params) throws Exception {
		try {
			mdmService.updateRoutingDetails(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	@DeleteMapping(value = "/mtlRoutingDetails")
	public ResponseEntity<?> deleteRoutingDetails(@RequestBody Map<String, Object> params) throws Exception {
		try {
			mdmService.deleteRoutingDetails(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/itemView")
	public Map<String, Object> getItemsView(@RequestParam Map<String, Object> params) throws Exception {
		return mdmService.getItemsView(params);
	}

	@PostMapping(value = "/createItem")
	public ResponseEntity<?> createItem(@RequestBody MtlItemMasters params) throws Exception {
		try {
			mdmService.createItem(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	@PostMapping(value = "/updateItem")
	public ResponseEntity<?> updateItem(@RequestBody MtlItemMasters params) throws Exception {
		try {
			mdmService.updateItem(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PostMapping(value = "/createpackingItem")
	public ResponseEntity<?> createPackingItem(@RequestBody MtlItemPackingRules params) throws Exception {
		try {
			mdmService.createPackingItem(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PostMapping(value = "/updatepackingItem")
	public ResponseEntity<?> updatePackingItem(@RequestBody MtlItemPackingRules params) throws Exception {
		try {
			mdmService.updatePackingItem(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PostMapping(value = "/deletepackingItem/{id}")
	public ResponseEntity<?> deletePackingItem(@RequestBody Map<String, Object> params, @PathVariable("id") Long id) throws Exception {
		try {
			mdmService.deletePackingItem(id);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/itempackView")
	public List<MtlItemPackingRules> itemPackView(@RequestParam Map<String, Object> params) throws Exception {
		return mdmService.itemPackView(params);
	}

	@GetMapping(value = "/itemlabelView")
	public List<MtlItemLabelRules> itemLabelView(@RequestParam Map<String, Object> params) throws Exception {
		return mdmService.itemLabelView(params);
	}
	
	@PostMapping(value = "/deletelabelItem/{id}")
	public ResponseEntity<?> deletelabelItem(@RequestBody Map<String, Object> params, @PathVariable("id") Long id) throws Exception {
		try {
			mdmService.deleteLabelItem(id);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PostMapping(value = "/updatelabelItem")
	public ResponseEntity<?> updateLabelItem(@RequestBody MtlItemLabelRules params) throws Exception {
		try {
			mdmService.updateLabelItem(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PostMapping(value = "/createlabelItem")
	public ResponseEntity<?> createLabelItem(@RequestBody MtlItemLabelRules params) throws Exception {
		try {
			mdmService.createLabelItem(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	@GetMapping(value = "/itemSerialRules")
	public Map<String, Object> getItemSerialRules(@RequestParam Map<String, Object> params) {
		Map<String, Object> map = mdmService.getItemSerialRules(params);
		return map;
	}
	
	@GetMapping(value = "/itemSerialRuleItems")
	public Map<String, Object> getItemSerialRuleItems(@RequestParam Map<String, Object> params) {
		return mdmService.getItemSerialRuleItems(params);
	}
	
	@PostMapping(value = "/serialRules")
	public ResponseEntity<?> createSerialRules(@RequestBody MtlItemSerialRules params) throws Exception {
		try {
			mdmService.createSerialRules(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PutMapping(value = "/serialRules")
	public ResponseEntity<?> updateSerialRules(@RequestBody MtlItemSerialRules params) throws Exception {
		try {
			mdmService.updateSerialRules(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@DeleteMapping(value = "/serialRules/{id}")
	public ResponseEntity<?> deleteSerialRules(@PathVariable("id") Long id) throws Exception {
		try {
			mdmService.deleteSerialRules(id);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/lastUpdatedByName/{id}")
	public ResponseEntity<?> getLastUpdatedByName(@PathVariable("id") Long id) throws Exception {
		try {
			return ResponseEntity.ok(mdmService.getLastUpdatedByName(id));
		} catch (Exception e) {
			return new ResponseEntity<>("Invalid User ID.", HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/serialruleList")
	public List<MtlItemSerialRules> serialRuleList(@RequestParam Map<String, Object> params) {
		List<MtlItemSerialRules> list = mdmService.serialRuleList(params);
		return list;
	}
	
	@GetMapping(value = "/itemSelectList")
	public List<MtlItemMasters> itemSelectList(@RequestParam Map<String, Object> params) {
		List<MtlItemMasters> list = mdmService.itemSelectList(params);
		return list;
	}
	
	@GetMapping(value = "/topLevelDefectCodes")
	public List<MtlDefectCodes> getTopLevelDefectCodes(@RequestParam("level") Integer level) {
		return mdmService.getTopLevelDefectCodes(level);
	}

	@GetMapping(value = "/topLevelRepairCodes")
	public List<MtlRepairCodes> getTopLevelRepairCodes(@RequestParam("level") Integer level) {
		List<MtlRepairCodes> result = mdmService.getTopLevelRepairCodes(level);
		return result;
	}
	
	@GetMapping(value = "/defectCodes")
	public Map<String,Object> getDefectCodes(@RequestParam Map<String, Object> params) {
		Map<String,Object> map = mdmService.getDefectCodes(params);
		return map;
	}
	
	@PostMapping(value = "/defectCodes")
	public ResponseEntity<?> insertDefectCode(@RequestBody MtlDefectCodes params) throws SQLException {
		try {
			mdmService.insertDefectCode(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>("Invalid Input Defect Code. (ex. Already used code)", HttpStatus.METHOD_NOT_ALLOWED);
		}	
	}
	
	@PutMapping(value = "/defectCodes")
	public ResponseEntity<?> updateDefectCode(@RequestBody MtlDefectCodes defectCode) {
		try {
			mdmService.updateDefectCode(defectCode);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@DeleteMapping(value = "/defectCodes")
	public ResponseEntity<?> deleteDefectCode(@RequestBody Map<String, Object> params) {
		try {
			mdmService.deleteDefectCode((Integer)params.get("defectCodeId"));
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/repairCodes")
	public Map<String,Object> getRepairCodes(@RequestParam Map<String,Object> params) {
		Map<String,Object> map = mdmService.getRepairCodes(params);
		return map;
	}
	
	@PostMapping(value = "/repairCodes")
	public ResponseEntity<?> insertRepairCode(@RequestBody MtlRepairCodes repairCodes) {
		try {
			mdmService.insertRepairCode(repairCodes);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>("Invalid Input Repair Code. (ex. Already used code)", HttpStatus.METHOD_NOT_ALLOWED);
		}	
	}
	
	@PutMapping(value = "/repairCodes")
	public ResponseEntity<?> updateRepairCode(@RequestBody MtlRepairCodes repairCodes) {
		try {
			mdmService.updateRepairCode(repairCodes);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@DeleteMapping(value = "/repairCodes")
	public ResponseEntity<?> deleteRepairCode(@RequestBody Map<String, Object> params) {
		try {
			mdmService.deleteRepairCode((Integer)params.get("repairCodeId"));
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/items")
	public List<Map<String,Object>> getItems(@RequestParam Map<String, Object> params) {
		return mdmService.getItems(params);
	}
	
	@GetMapping(value = "/item/{item}")
	public MtlItemMasters getItem(@PathVariable("item") String item) {
		return mdmService.getItem(item);
	}
	
	@GetMapping(value = "/operations")
	public List<Map<String,Object>> getOperations(@RequestParam Map<String, Object> params) {
		return mdmService.getOperations(params);
	}
	
	@PostMapping(value = "/operations")
	public ResponseEntity<?> insertOperations(@RequestBody Map<String, Object> params) {
		try {
			mdmService.insertOperations(params);
			return ResponseEntity.ok(params.get("opid"));
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	@PutMapping(value = "/operations")
	public ResponseEntity<?> updateOperations(@RequestBody Map<String, Object> params) {
		try {
			mdmService.updateOperations(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}

	@DeleteMapping(value = "/operations")
	public ResponseEntity<?> deleteOperations(@RequestBody Map<String, Object> params) {
		try {
			mdmService.deleteOperations((Integer)params.get("opid"));
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@GetMapping(value = "/operationParts")
	public List<Map<String,Object>> getOperationParts(@RequestParam Map<String, Object> params) {
		int opId = params.get("opid")==null?0:Integer.parseInt((String)params.get("opid"));
		
		return mdmService.getOperationParts(opId);
	}
	
	@PostMapping(value = "/operationParts")
	public ResponseEntity<?> insertOperationParts(@RequestBody Map<String, Object> params) {
		try {
			mdmService.insertOperationParts(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@PutMapping(value = "/operationParts")
	public ResponseEntity<?> updateOperationParts(@RequestBody Map<String, Object> params) {
		try {
			mdmService.updateOperationParts(params);
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	@DeleteMapping(value = "/operationParts")
	public ResponseEntity<?> deleteOperationParts(@RequestBody Map<String, Object> params) {
		try {
			mdmService.deleteOperationParts(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
		
	@GetMapping(value = "/routings")
	public List<Map<String,Object>> getRoutings(@RequestParam Map<String, Object> params) {
		int itemid = params.get("itemid")==null?0:Integer.parseInt((String)params.get("itemid"));
		
		return mdmService.getRoutings(itemid);
	}	
	
	// Modification
	@PostMapping(value = "/copyfromPacking")
	public ResponseEntity<?> copyfromPacking(@RequestBody Map<String, Object> params) {
		try {
			mdmService.copyfromPacking(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}
	
	// Modification
	@PostMapping(value = "/copyfromLabel")
	public ResponseEntity<?> copyfromLabel(@RequestBody Map<String, Object> params) {
		try {
			mdmService.copyfromLabel(params);		
			return ResponseEntity.ok("");
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
		}
	}	
}
