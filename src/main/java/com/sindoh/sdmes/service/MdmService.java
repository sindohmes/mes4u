package com.sindoh.sdmes.service;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sindoh.sdmes.mapper.MdmMapper;
import com.sindoh.sdmes.model.MtlItemMasters;
import com.sindoh.sdmes.model.MtlItemProductFamily;
import com.sindoh.sdmes.model.MtlRoutingDetailsView;
import com.sindoh.sdmes.model.MtlRoutings;
import com.sindoh.sdmes.model.UsersView;
import com.sindoh.sdmes.model.MtlItemLabelRules;
import com.sindoh.sdmes.model.MtlItemPackingRules;
import com.sindoh.sdmes.model.MtlDefectCodes;
import com.sindoh.sdmes.repository.MtlItemMastersRepository;
import com.sindoh.sdmes.repository.MtlItemMastersViewRepository;
import com.sindoh.sdmes.repository.MtlRoutingDetailsViewRepository;
import com.sindoh.sdmes.repository.MtlRoutingsRepository;
import com.sindoh.sdmes.repository.UserViewRepository;
import com.sindoh.sdmes.repository.MtlItemLabelRulesRepository;
import com.sindoh.sdmes.repository.MtlItemPackingRepository;
import com.sindoh.sdmes.specification.LineSpecs;
import com.sindoh.sdmes.specification.MtlItemSerialRuleSpecs;
import com.sindoh.sdmes.util.Casting;
import com.sindoh.sdmes.model.MesSites;
import com.sindoh.sdmes.model.MtlItemSerialRules;
import com.sindoh.sdmes.model.MtlLines;
import com.sindoh.sdmes.model.MtlRepairCodes;
import com.sindoh.sdmes.repository.MesSitesRepository;
import com.sindoh.sdmes.repository.MtlDefectCodesRepository;
import com.sindoh.sdmes.repository.MtlItemSerialRuleRepository;
import com.sindoh.sdmes.repository.MtlLinesRepository;
import com.sindoh.sdmes.repository.MtlLinesViewRepository;
import com.sindoh.sdmes.repository.MtlRepairCodesRepository;
import com.sindoh.sdmes.repository.MtlItemMastersFamilyRepository;

@Service
public class MdmService {
	@Autowired
	private MesSitesRepository siteRepository;
	
	@Autowired
	MtlLinesViewRepository lineViewRepository;
	
	@Autowired
	MtlLinesRepository lineRepository;
	
	@Autowired
	MtlItemMastersViewRepository itemMasterViewRepository;
	
	@Autowired
	MtlItemMastersRepository itemMasterRepository;
	
	@Autowired
	private MtlRoutingsRepository mrRepository;

	@Autowired
	private MtlRoutingDetailsViewRepository mrdvRepository;
	
	@Autowired
	MtlItemMastersRepository itemMastersRepository;
	
	@Autowired
	MtlItemPackingRepository itempackingRepository;
	
	@Autowired
	MtlItemLabelRulesRepository itemlabelRepository;

	@Autowired
	private MtlItemSerialRuleRepository itemSerialRuleRepository;	

	@Autowired
	private MtlItemMastersFamilyRepository itemMastersFamilyRepository;
	
	@Autowired
	private UserViewRepository userRepository;
	
	@Autowired
	private MdmMapper mdmMapper;

	@Autowired
	private MtlDefectCodesRepository defectCodesRepository;
	
	@Autowired
	private MtlRepairCodesRepository repairCodesRepository;
	
	public List<Map<String,Object>> getOperationType(int site) {
		List<Map<String,Object>> res = mdmMapper.getOperationType(site);
		return res;
	}
	
	public List<MesSites> getSites() {
		List<MesSites> res = siteRepository.findAll();
		return res;
	}
	
	public Map<String, Object> getMtlLinesView(Map<String, Object> params) {
		Map<String, Object> map = new HashMap<String, Object>();
		int page = Integer.parseInt((String)params.get("page")) - 1;
		int size = Integer.parseInt((String)params.get("limit"));
		Sort sort = Sort.by((String)params.get("sortprop"));		
			
		if (params.get("sort") != null) {
			if (params.get("sort").equals("descending")) {
				sort = sort.descending();
			} else {
				sort = sort.ascending();
			}
		}
			
		Pageable pageable = PageRequest.of(page, size, sort);
		
		map.put("items",lineViewRepository.findAll(LineSpecs.searchWith(params), pageable));
		map.put("total", lineViewRepository.count());
		
		return map;		
	}
	
	public List<MtlLines> getLines(Integer id) {
		List<MtlLines> res = lineRepository.findBySiteOrderByName(id);
		return res;
	}
	
	public void createLine(MtlLines line) throws Exception {
		if (lineRepository.existsById(line.getId())) {
			throw new Exception("Already Exists line id");
		} else {
			lineRepository.save(line);
		}
	}
	
	public void updateLine(MtlLines line) {
		line.setLast_update_date(LocalDateTime.now());
		lineRepository.save(line);
	}

	public List<MtlItemProductFamily> getProductFamily(Integer id) {
		List<MtlItemProductFamily> productFamily = itemMastersFamilyRepository.findBySiteOrderByFamily(id);
		return productFamily;
	}	
	
	public MtlRoutings getRouting(Map<String, Object> params)  {
		MtlRoutings res = mrRepository.findByItemAndSite((String)params.get("item"), Integer.parseInt((String)params.get("site")));
		return res;
	}

	public MtlRoutings createRouting(MtlRoutings routing) {
		// Not only create function. 
		// Front End Process: Item Search - No data found - Creation
		mrRepository.save(routing);
		return routing;
	}

	public void updateRouting(MtlRoutings routing) {
		mrRepository.save(routing);
	}

	public List<MtlRoutingDetailsView> getRoutingDetails(Integer id) {
		List<MtlRoutingDetailsView> res = mrdvRepository.findByRoutingid(id);
		return res;
	}

	// Procedure Call
	public void createRoutingDetails(Map<String, Object> params) {
		// Creation is only through selecting in the operation list,
		// so more than one operations is not duplicated.		
		params = Casting.MapCast(params);
		mdmMapper.insertRoutingDetails(params);
	}	
	
	// Procedure Call
	@Transactional
	public void updateRoutingDetails(Map<String, Object> params) {
		String[] paramList = { "D","D","D","S","D","S","S","S","D" };
		params = Casting.MapCast(params, paramList);
		mdmMapper.updateRoutingDetails(params);
	}
	
	// Procedure Call
	public void deleteRoutingDetails(Map<String, Object> params) {
		params = Casting.MapCast(params);
		mdmMapper.deleteRoutingDetails(params);
	}	
	
	public Map<String, Object> getItemsView(Map<String, Object> params) {
		Map<String, Object> map = new HashMap<String, Object>();
		int page = Integer.parseInt((String)params.get("currentpage"))-1;
		int size = Integer.parseInt((String)params.get("limit"));		
		
		Sort sort = Sort.by((String)params.get("prop"));
		if (Integer.parseInt((String)params.get("sort")) == 0) {
			sort = sort.descending();
		} else {
			sort = sort.ascending();
		}
		Pageable pageable = PageRequest.of(page, size, sort);
		
		if ((String)params.get("item") == null) {
			map.put("items", itemMasterViewRepository.findAll(pageable));
		} else {
			map.put("items", itemMasterViewRepository.findByItemnumberLike((String)params.get("item")+'%', pageable));
			
		}
		map.put("total", itemMasterViewRepository.count());
		return map;	
	}
	
	public void createItem(MtlItemMasters item) throws Exception, SQLException {
		if (itemMastersRepository.existsById(item.getId())) {
			throw new Exception("Already Exists item id");
		} else {
			itemMastersRepository.save(item);	
		}
	}

	public void updateItem(MtlItemMasters item) {
		item.setLastupdatedate(LocalDateTime.now());
		itemMastersRepository.save(item);		
	}
	
	public void createPackingItem(MtlItemPackingRules params) {
		itempackingRepository.save(params);
	}

	public void updatePackingItem(MtlItemPackingRules params) {
		params.setLastupdatedate(LocalDateTime.now());
		itempackingRepository.save(params);
	}
	
	public void deletePackingItem(Long id) {
		itempackingRepository.deleteById(id);
	}
		
	public List<MtlItemPackingRules> itemPackView(Map<String, Object> params) {
		List<MtlItemPackingRules> list = itempackingRepository.findByItemid(Long.parseLong((String)params.get("id"))); 
		return list;
	}
	
	public List<MtlItemLabelRules> itemLabelView(Map<String, Object> params) {
		String type = (String)params.get("type");
		Long itemid = Long.parseLong((String)params.get("itemid"));
		
		List<MtlItemLabelRules> list;
		if (type == "") {
		  list = itemlabelRepository.findByItemid(itemid);
		}
		else {
		  list = itemlabelRepository.findByItemidAndLabelname(itemid, type);	
		}
		return list;		
	}
		
	public void deleteLabelItem(Long id) {
		itemlabelRepository.deleteById(id);
	}	

	public void updateLabelItem(MtlItemLabelRules params) {
		params.setLastupdatedate(LocalDateTime.now());
		itemlabelRepository.save(params);
	}
	
	public void createLabelItem(MtlItemLabelRules params) {
		itemlabelRepository.save(params);
	}

	public Map<String, Object> getItemSerialRules(Map<String, Object> params){
		Map<String, Object> map = new HashMap<String, Object>();
		
		int page = Integer.parseInt((String)params.get("page")) - 1;
		int size = Integer.parseInt((String)params.get("limit"));		
		Sort sort = Sort.by("id");
		
		if (Integer.parseInt((String)params.get("sort")) == 1) {
			sort = sort.descending();
		}

		Pageable pageable = PageRequest.of(page, size, sort);

		
		Page<MtlItemSerialRules> data = itemSerialRuleRepository.findAll(MtlItemSerialRuleSpecs.searchWith(params), pageable);
		map.put("items", data.getContent());
		map.put("total", data.getTotalElements());

		return map;
	}

	public Map<String, Object> getItemSerialRuleItems(Map<String, Object> params) {
		Map<String, Object> map = new HashMap<String, Object>();
		
		int page = Integer.parseInt((String)params.get("page")) - 1;
		int size = Integer.parseInt((String)params.get("limit"));		
		Sort sort = Sort.by("itemnumber");
		
		if (Integer.parseInt((String)params.get("sort")) == 1) {
			sort = sort.descending();
		}

		Pageable pageable = PageRequest.of(page, size, sort);

		
		Page<MtlItemMasters> data = itemMastersRepository.findBySerialruleid((long) Integer.parseInt((String)params.get("serialruleid")), pageable);
		map.put("items", data.getContent());
		map.put("total", data.getTotalElements());

		return map;
	}
	
	public void createSerialRules(MtlItemSerialRules params) {
		itemSerialRuleRepository.save(params);
	}
	
	public void updateSerialRules(MtlItemSerialRules params) {
		params.setLastUpdateDate(LocalDateTime.now());
		itemSerialRuleRepository.save(params);
	}
	
	public void deleteSerialRules(Long id) {
		itemSerialRuleRepository.deleteById(id);
	}
	
	public UsersView getLastUpdatedByName(Long id) {
		UsersView user = userRepository.findById(id).get();
		return user;		
	}

	public List<MtlItemSerialRules> serialRuleList(Map<String, Object> params) {
		List<MtlItemSerialRules> snrules = new ArrayList<MtlItemSerialRules>();
		String rule = (String)params.get("rule");

		if (rule == "" && params.get("id") != null) {
			try {
				MtlItemSerialRules milr = itemSerialRuleRepository.findById(Long.parseLong((String)params.get("id"))).get();
				snrules.add(milr);
			} catch(NoSuchElementException e) {
				
			} catch(NumberFormatException e) {
				
			}			
		} else if (rule != "") {
			snrules = itemSerialRuleRepository.findBySerialRuleDescriptionLike(rule+"%");
		}
		
		return snrules;
	}
	
	public List<MtlItemMasters> itemSelectList(Map<String, Object> params) {
		String name = (String)params.get("name") + "%";
		List<MtlItemMasters> itemlist = new ArrayList<MtlItemMasters>();
		if (name.length() > 3) {
			itemlist = itemMasterRepository.findByItemnumberLikeOrItemdescriptionLike(name, name);
		}

		return itemlist;
	}
	
	public List<MtlDefectCodes> getTopLevelDefectCodes(Integer level) {
		level = level==null?1:level;
		Pageable pageable = PageRequest.of(0, Integer.MAX_VALUE,  Sort.by("id"));
		List<MtlDefectCodes> codes = defectCodesRepository.findByCodeLevel(level, pageable).getContent();
		return codes;
	}
	
	public List<MtlRepairCodes> getTopLevelRepairCodes(Integer level) {
		level = level==null?1:level;
		Pageable pageable = PageRequest.of(0, Integer.MAX_VALUE,  Sort.by("id"));
		List<MtlRepairCodes> list = repairCodesRepository.findByCodeLevel(level, pageable).getContent();
		return list;
	}
	
	public Map<String,Object> getDefectCodes(Map<String, Object> params) {
		String[] paramList = { "I","I","S","S","S","S" };	
		params = Casting.MapCast(params, paramList);
		
		String sortprop = (String)params.get("sortprop");
		String sortval = (String)params.get("sort");
		Integer page = (Integer)params.get("page");
		Integer size = (Integer)params.get("size");
		
		Sort sort = Sort.by(sortprop);		
		
		if (sortval != null) {
			if (sortval.equals("descending")) {
				sort = sort.descending();
			} else {
				sort = sort.ascending();
			}
		}
		
		Page<MtlDefectCodes> list;
		Pageable pageable = PageRequest.of(page-1, size,  sort);
		
		if(params.get("toplevelcode") == null || params.get("toplevelcode").equals("")) {
			if(params.get("code") == null || params.get("code").equals("")) {
				list = defectCodesRepository.findAll(pageable);
			} else {
				list = defectCodesRepository.findByCode((String)params.get("code"), pageable);
			}
		} else {
			if(params.get("code") == null || params.get("code").equals("")) {
				list = defectCodesRepository.findByParentCodeLv1OrCode((String)params.get("toplevelcode"), (String)params.get("toplevelcode"), pageable);
			} else {
				list = defectCodesRepository.findByParentCodeLv1AndCode((String)params.get("toplevelcode"), (String)params.get("code"), pageable);	
			}
		}
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("items", list.getContent());
		map.put("total", list.getTotalElements());
		return map;
	}
	
	public void insertDefectCode(MtlDefectCodes defectCodes) {
		defectCodesRepository.save(defectCodes);
	}

	public void updateDefectCode(MtlDefectCodes defectCodes) {
		defectCodesRepository.save(defectCodes);
	}
	
	public void deleteDefectCode(int defectCodeId) {
		defectCodesRepository.deleteById(defectCodeId);
	}
	
	public Map<String, Object> getRepairCodes(Map<String, Object> params) {
		String[] paramList = { "I","I","S","S","S","S" };	
		params = Casting.MapCast(params, paramList);
		
		String sortprop = (String)params.get("sortprop");
		String sortval = (String)params.get("sort");
		Integer page = (Integer)params.get("page");
		Integer size = (Integer)params.get("size");
		
		Sort sort = Sort.by(sortprop);		
		
		if (sortval != null) {
			if (sortval.equals("descending")) {
				sort = sort.descending();
			} else {
				sort = sort.ascending();
			}
		}		
		
		Page<MtlRepairCodes> list;
		Pageable pageable = PageRequest.of(page-1, size,  sort);
		
		if(params.get("toplevelcode") == null || params.get("toplevelcode").equals("")) {
			if(params.get("code") == null || params.get("code").equals("")) {
				list = repairCodesRepository.findAll(pageable);
			} else {
				list = repairCodesRepository.findByCode((String)params.get("code"), pageable);
			}
		} else {
			if(params.get("code") == null || params.get("code").equals("")) {
				list = repairCodesRepository.findByParentCodeLv1((String)params.get("toplevelcode"), pageable);
			} else {
				list = repairCodesRepository.findByParentCodeLv1AndCode((String)params.get("toplevelcode"), (String)params.get("code"), pageable);	
			}
		}
				
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("items", list.getContent());
		map.put("total", list.getTotalElements());

		return map;
	}
	
	public void insertRepairCode(MtlRepairCodes repairCodes) {
		repairCodesRepository.save(repairCodes);
	}

	public void updateRepairCode(MtlRepairCodes repairCodes) {
		repairCodesRepository.save(repairCodes);
	}

	public void deleteRepairCode(int repairCodeId) {
		repairCodesRepository.deleteById(repairCodeId);
	}

	public List<Map<String, Object>> getItems(Map<String, Object> params) {
		params.put("site", Integer.parseInt((String)params.get("site")));
		List<Map<String, Object>> list = mdmMapper.getItemMasters(params);
		return list;
	}
	
	public MtlItemMasters getItem(String itemname) {
		MtlItemMasters item =  itemMastersRepository.findByItemnumber(itemname);
		return item;
	}
	
	public List<Map<String,Object>> getOperations(Map<String,Object> params) {
		String operationType = params.get("optype")==null?"":(String)params.get("optype");
		String operationDesc = params.get("opdesc")==null?"":(String)params.get("opdesc");
		String itemNumber = params.get("itemNumber")==null?"":(String)params.get("itemNumber");
		String assyItemNumber = params.get("assyItemNumber")==null?"":(String)params.get("assyItemNumber");
		
		List<Map<String, Object>> list = mdmMapper.getOperations(operationType, operationDesc, itemNumber, assyItemNumber);
		return list;
	}
	
	public void insertOperations(Map<String,Object> params) {
		params = Casting.MapCast(params);
		mdmMapper.insertOperations(params);		
	}

	public void updateOperations(Map<String,Object> params) {
		String[] paramList = { "I","S","S","D","D" };		
		params = Casting.MapCast(params, paramList);
		mdmMapper.updateOperations(params);		
	}

	public void deleteOperations(int operationId) {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("p_operation_id", operationId);
		mdmMapper.deleteOperations(map);
	}

	public List<Map<String,Object>> getOperationParts(int opId) {
		List<Map<String,Object>> list = mdmMapper.getOperationParts(opId);
		return list;
	}

	public void insertOperationParts(Map<String,Object> params) {
		params = Casting.MapCast(params);
		mdmMapper.insertOperationParts(params);
	}
		
	public void updateOperationParts(Map<String,Object> params) {
		params = Casting.MapCast(params);
		mdmMapper.updateOperationParts(params);
	}
	
	public void deleteOperationParts(Map<String,Object> params) {
		params = Casting.MapCast(params);
		mdmMapper.deleteOperationParts(params);
	}

	public List<Map<String,Object>> getRoutings(int itemId) {
		List<Map<String,Object>> list = mdmMapper.getRoutings(itemId);		
		return list;
	}
	
	public void copyfromPacking(Map<String,Object> map) {
		map = Casting.MapCast(map);
		mdmMapper.copyfromPacking(map);
	}
	
	public void copyfromLabel(Map<String,Object> map) {
		map = Casting.MapCast(map);
		mdmMapper.copyfromLabel(map);
	}
	
}