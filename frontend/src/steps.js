const steps = {
  Dashboard: [
    {
      element: '#sidebar-container',
      popover: {
        title: 'Sidebar',
        description: 'Can select MES Menus',
        position: 'right'
      }
    },
    {
      element: '#hamburger-container',
      popover: {
        title: 'Hamburger',
        description: 'Open && Close sidebar',
        position: 'bottom'
      }
    },
    {
      element: '#breadcrumb-container',
      popover: {
        title: 'Breadcrumb',
        description: 'Indicate the current page location',
        position: 'bottom'
      }
    },
    {
      element: '#user-status',
      popover: {
        title: 'User Status',
        description: 'Current login user',
        position: 'left'
      }
    },
    {
      element: '#screenfull',
      popover: {
        title: 'Screenfull',
        description: 'Set the page into fullscreen',
        position: 'left'
      }
    },
    {
      element: '#activity',
      popover: {
        title: 'User Activity',
        description: 'User Info and Logout menu',
        position: 'left'
      },
      padding: 0
    }
  ],
  ProductionLines: [
    {
      element: '#site',
      popover: {
        title: 'Factory Site',
        description: 'You can select Hanoi Factory currently',
        position: 'bottom'
      }
    },
    {
      element: '#linename',
      popover: {
        title: 'Line Name',
        description: 'Input a line name',
        position: 'bottom'
      }
    },
    {
      element: '#linealias',
      popover: {
        title: 'Line Alias',
        description: 'Input a line alias',
        position: 'bottom'
      }
    },
    {
      element: '#searchbtn',
      popover: {
        title: 'Search Button',
        description: 'Search lines, also can input Enter Key',
        position: 'bottom'
      }
    },
    {
      element: '#createbtn',
      popover: {
        title: 'Line Creation',
        description: 'Line Creation Modal Window will be appeared',
        position: 'bottom'
      }
    },
    {
      element: '#exportexcel',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'bottom'
      }
    },
    {
      element: '#linelist',
      popover: {
        title: 'Line List',
        description: 'You can select Hanoi Factory currently',
        position: 'bottom'
      }
    }
  ],
  ItemMaster: [
    {
      element: '#searchitemtext',
      popover: {
        title: 'Item Number',
        description: 'Enable Part Search<br />Ex: A610 / A610DN / A610DN40-H',
        position: 'bottom'
      }
    },
    {
      element: '#searchitembtn',
      popover: {
        title: 'Search Button',
        description: 'Search items, also can input Enter Key',
        position: 'bottom'
      }
    },
    {
      element: '#createitembtn',
      popover: {
        title: 'Create Item',
        description: 'Item Creation Modal Window will be appeared',
        position: 'bottom'
      }
    },
    {
      element: '#exportitembtn',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'bottom'
      }
    },
    {
      element: '#itemlist',
      popover: {
        title: 'Item List',
        description: 'Searched Item List, if you click the item then you can see item\'s packing and label information',
        position: 'bottom'
      }
    },
    {
      element: '#createpackingbtn',
      popover: {
        title: 'Item Packing Rule Creation',
        description: 'Item Packing Rules Creation Modal Window will be appeared',
        position: 'bottom'
      }
    },
    {
      element: '#exportpackingbtn',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below packing list',
        position: 'bottom'
      }
    },
    {
      element: '#copyfrompacking',
      popover: {
        title: 'Copy From Packing',
        description: 'If you want item\'s packing information from other item, please input the item',
        position: 'bottom'
      }
    },
    {
      element: '#copyfrompackingbtn',
      popover: {
        title: 'Copy From Button',
        description: 'This will be copied the item\'s packing information',
        position: 'bottom'
      }
    },
    {
      element: '#packinglist',
      popover: {
        title: 'Item Packing List',
        description: 'Searched Item\'s Packing List',
        position: 'bottom'
      }
    },
    {
      element: '#createlabelbtn',
      popover: {
        title: 'Item Label Rule Creation',
        description: 'Item Label Rule Creation Modal Window will be appeared',
        position: 'bottom'
      }
    },
    {
      element: '#exportlabelbtn',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below label list',
        position: 'bottom'
      }
    },
    {
      element: '#copyfromlabel',
      popover: {
        title: 'Copy From Label',
        description: 'If you want item\'s label information from other item, please input the item',
        position: 'bottom'
      }
    },
    {
      element: '#copyfromlabelbtn',
      popover: {
        title: 'Copy From Button',
        description: 'This will be copied the item\'s label information',
        position: 'bottom'
      }
    },
    {
      element: '#labellist',
      popover: {
        title: 'Item Label List',
        description: 'Searched Item\'s Label List',
        position: 'top'
      }
    }
  ],
  RoutingMaster: [
    {
      element: '#routingitem',
      popover: {
        title: 'Search Routing Item',
        description: 'You must input the item\'s number exactly',
        position: 'bottom'
      }
    },
    {
      element: '#routingdescription',
      popover: {
        title: 'Change Routing Description',
        description: 'Register or change routing information, if you press enter key then routing description will be applied',
        position: 'bottom'
      }
    },
    {
      element: '#routingdetaillist',
      popover: {
        title: 'Routing Detail List',
        description: 'Searched Routing\'s Detail List',
        position: 'bottom'
      }
    },
    {
      element: '#exportroutingbtn',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below routing detail list',
        position: 'bottom'
      }
    },
    {
      element: '#saveroutingbtn',
      popover: {
        title: 'Save Routing Detail',
        description: 'Routing detail registration or deletion is applied directly, but routing detail\'s information will be applied when you click save button',
        position: 'bottom'
      }
    },
    {
      element: '#operationname',
      popover: {
        title: 'Search Operation Name',
        description: 'Operation Type Search',
        position: 'bottom'
      }
    },
    {
      element: '#operationdescription',
      popover: {
        title: 'Search Operation Description',
        description: 'When you search Part Scan or Inspection, if you want to search detail information then please input the operation\'s detail info',
        position: 'bottom'
      }
    },
    {
      element: '#operationpartitem',
      popover: {
        title: 'Search Operation Part Item',
        description: 'When you search Part Scan, if you want to search traceability item then please input the operation\'s part item',
        position: 'bottom'
      }
    },
    {
      element: '#operationeditbtn',
      popover: {
        title: 'Operation Edit Button',
        description: 'If you want to edit operations, please click and move to the operation control',
        position: 'bottom'
      }
    },
    {
      element: '#operationlist',
      popover: {
        title: 'Operation List',
        description: 'Searched Operation List, if you click the operation then you can see operation part information',
        position: 'bottom'
      }
    },
    {
      element: '#operationpartlist',
      popover: {
        title: 'Operation List',
        description: 'Searched Operation\'s Part List',
        position: 'bottom'
      }
    },
    {
      element: '#exportoperation',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below operation list',
        position: 'left'
      }
    },
    {
      element: '#deleteroutingdetails',
      popover: {
        title: 'Delete Routing Detail',
        description: 'The Selected Routing Detail will be deleted.',
        position: 'bottom'
      }
    },
    {
      element: '#createroutingdetails',
      popover: {
        title: 'Add Routing Detail',
        description: 'Routing Detail information will be added at the selected operation',
        position: 'bottom'
      }
    },
    {
      element: '#deleteallroutingdetails',
      popover: {
        title: 'Delete All Routing Detail',
        description: 'All Routing Details will be deleted',
        position: 'bottom'
      }
    }
  ],
  OperationControl: [
    {
      element: '#operationname',
      popover: {
        title: 'Search Operation Name',
        description: 'Operation Type Search',
        position: 'bottom'
      }
    },
    {
      element: '#operationdescription',
      popover: {
        title: 'Search Operation Description',
        description: 'When you search Part Scan or Inspection, if you want to search detail information then please input the operation\'s detail info',
        position: 'bottom'
      }
    },
    {
      element: '#operationpartitem',
      popover: {
        title: 'Search Operation Part Item',
        description: 'When you search Part Scan, if you want to search traceability item then please input the operation\'s part item',
        position: 'bottom'
      }
    },
    {
      element: '#operationsearchbtn',
      popover: {
        title: 'Search Button',
        description: 'Search Results\' are more than one, default operation part information is selected the first operation in the searched operations',
        position: 'bottom'
      }
    },
    {
      element: '#operationlist',
      popover: {
        title: 'Operation List',
        description: 'Searched Operation List, if you click the operation then you can see operation part information',
        position: 'bottom'
      }
    },
    {
      element: '#exportoperation',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'bottom'
      }
    },
    {
      element: '#createoperationbtn',
      popover: {
        title: 'Opeation Creation',
        description: 'Operation Creation Modal Window will be appeared',
        position: 'bottom'
      }
    },
    {
      element: '#routinglist',
      popover: {
        title: 'Operation List',
        description: 'Searched Operation\'s Related Routing List',
        position: 'bottom'
      }
    },
    {
      element: '#exportrouting',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below related routing list',
        position: 'left'
      }
    },
    {
      element: '#operationpartlist',
      popover: {
        title: 'Operation List',
        description: 'Searched Operation\'s Part List',
        position: 'top'
      }
    },
    {
      element: '#exportoperationpart',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below operation part list',
        position: 'left'
      }
    },
    {
      element: '#createoperationpartbtn',
      popover: {
        title: 'Operation Part Creation',
        description: 'Operation Part Creation Modal Window will be appeared',
        position: 'top'
      }
    }
  ],
  SerialRules: [
    {
      element: '#ruledescription',
      popover: {
        title: 'Search Serial Rule Description',
        description: 'Serial Rule Description search',
        position: 'bottom'
      }
    },
    {
      element: '#rulemonthtype',
      popover: {
        title: 'Search Serial Rule Month Type',
        description: 'Serial Rule Month Type search, month type examples are YMM, YYMM, YHM, and so on',
        position: 'bottom'
      }
    },
    {
      element: '#rulesearchbtn',
      popover: {
        title: 'Search Button',
        description: 'Search Serial Rules, also can input Enter Key',
        position: 'bottom'
      }
    },
    {
      element: '#rulelist',
      popover: {
        title: 'Serial Rule List',
        description: 'Searched Serial Rule List',
        position: 'top'
      }
    },
    {
      element: '#rulecreatebtn',
      popover: {
        title: 'Serial Rule Creation',
        description: 'Serial Rule Creation Modal Window will be appeared',
        position: 'bottom'
      }
    },
    {
      element: '#exportrules',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'bottom'
      }
    }
  ],
  DefectCodes: [
    {
      element: '#searchtype',
      popover: {
        title: 'Search Type',
        description: 'Defect or Repair Selection',
        position: 'bottom'
      }
    },
    {
      element: '#searchparentcode',
      popover: {
        title: 'Parent Code',
        description: 'Parent Code Search',
        position: 'bottom'
      }
    },
    {
      element: '#searchcode',
      popover: {
        title: 'Defect/Repair Code',
        description: 'Code Search',
        position: 'bottom'
      }
    },
    {
      element: '#searchbtn',
      popover: {
        title: 'Search Button',
        description: 'Search defect or repair codes, also can input Enter Key',
        position: 'bottom'
      }
    },
    {
      element: '#codelist',
      popover: {
        title: 'Defect/Repair List',
        description: 'Searched Defect/Repair List',
        position: 'top'
      }
    },
    {
      element: '#createcodebtn',
      popover: {
        title: 'Defect/Repair Code Creation',
        description: 'Defect/Repair Code Creation Modal Window will be appeared<br />If you select a defect then defect code creation, or else repair code creation',
        position: 'top'
      }
    },
    {
      element: '#exportcodes',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'bottom'
      }
    }
  ],
  JobDispatches: [
    {
      element: '#searchitem',
      popover: {
        title: 'Search Item Number',
        description: 'Input item number, and you can enable Part Search',
        position: 'bottom'
      }
    },
    {
      element: '#searchline',
      popover: {
        title: 'Search Line',
        description: 'Production Line Selection',
        position: 'bottom'
      }
    },
    {
      element: '#searchstatus',
      popover: {
        title: 'Search Status',
        description: 'Status is job\'s status, its types are New, S/N Created, Op. Created, Manufacturing, Completed, Canceled, you can select one of these',
        position: 'bottom'
      }
    },
    {
      element: '#searchjobid',
      popover: {
        title: 'Searcj Dispatch Job ID',
        description: 'Dispatch Job ID is created automatically, and you can search the number',
        position: 'bottom'
      }
    },
    {
      element: '#searchdate',
      popover: {
        title: 'From - To Date',
        description: 'Dispatch Job Start Date Range Selection',
        position: 'bottom'
      }
    },
    {
      element: '#searchbtn',
      popover: {
        title: 'Search Button',
        description: 'Search jobs, also can input Enter Key',
        position: 'bottom'
      }
    },
    {
      element: '#joblist',
      popover: {
        title: 'Dispatch Job List',
        description: 'Searched Dispatch Job List',
        position: 'top'
      }
    },
    {
      element: '#createjobbtn',
      popover: {
        title: 'Dispatch Job Creation',
        description: 'Dispatch Job Creation Modal Window will be appeared',
        position: 'left'
      }
    },
    {
      element: '#exportjobs',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'left'
      }
    }
  ],
  LabelPrint: [
    {
      element: '#searchitem',
      popover: {
        title: 'Search Item Number',
        description: 'Input item number, and you can enable Part Search',
        position: 'bottom'
      }
    },
    {
      element: '#searchline',
      popover: {
        title: 'Search Line',
        description: 'Production Line Selection',
        position: 'bottom'
      }
    },
    {
      element: '#searchjobid',
      popover: {
        title: 'Searcj Dispatch Job ID',
        description: 'Dispatch Job ID is created automatically, and you can search the number',
        position: 'bottom'
      }
    },
    {
      element: '#searchdate',
      popover: {
        title: 'From - To Date',
        description: 'Dispatch Job Start Date Range Selection',
        position: 'bottom'
      }
    },
    {
      element: '#searchbtn',
      popover: {
        title: 'Search Button',
        description: 'Search jobs, also can input Enter Key',
        position: 'bottom'
      }
    },
    {
      element: '#joblist',
      popover: {
        title: 'Dispatch Job List',
        description: 'Searched Dispatch Job List, if you click the job then you can see the job item\'s label type and you can select the item\'s label type',
        position: 'top'
      }
    },
    {
      element: '#exportjobs',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'left'
      }
    },
    {
      element: '#serialguide',
      popover: {
        title: 'Additional Guide',
        description: 'Please first select a job. The job\'s item has a label type and if you select a label type then you can see how to print a label',
        position: 'left'
      }
    }
  ],
  LabelPrintDetail1: [
    {
      element: '#labeltype',
      popover: {
        title: 'Label Type',
        description: 'Your selected job item\'s label list',
        position: 'top'
      }
    },
    {
      element: '#labelparams',
      popover: {
        title: 'Label Parameters',
        description: 'Your selected label type\'s registered parameters, and default values are shown by the job\'s information',
        position: 'top'
      }
    },
    {
      element: '#serialnumberguide',
      popover: {
        title: 'Serial Numbe Guide',
        description: 'If the label requires serial number, then introduce a guide how to print and assign serial numbers',
        position: 'top'
      }
    },
    {
      element: '#seriallist',
      popover: {
        title: 'Dispatch Job Serial Number List',
        description: 'Searched Dispatch Job\'s Serial Number List',
        position: 'top'
      }
    },
    {
      element: '#serialinterval',
      popover: {
        title: 'Serial Interval',
        description: 'Default Interval is all serial number range, and you can modify a interval. If you change an interval, then serial number range is also changed',
        position: 'top'
      }
    },
    {
      element: '#labelprintbtn',
      popover: {
        title: 'Label Print',
        description: 'Label will printed, if the label type is URL then open the url or else is FILE then open the file but file is opened only in the IE',
        position: 'left'
      }
    }
  ],
  LabelPrintDetail2: [
    {
      element: '#labeltype',
      popover: {
        title: 'Label Type',
        description: 'Your selected job item\'s label list',
        position: 'top'
      }
    },
    {
      element: '#labelparams',
      popover: {
        title: 'Label Parameters',
        description: 'Your selected label type\'s registered parameters, and default values are shown by the job\'s information',
        position: 'top'
      }
    },
    {
      element: '#labelprintbtn',
      popover: {
        title: 'Label Print',
        description: 'Label will printed, if the label type is URL then open the url or else is FILE then open the file but file is opened only in the IE',
        position: 'left'
      }
    }
  ],
  OperationSol: [
    {
      element: '#barcode',
      popover: {
        title: 'Scan Assy Barcode',
        description: 'Scan Assy Barcode, you can enter the barcode',
        position: 'bottom'
      }
    },
    {
      element: '#result',
      popover: {
        title: 'Scan Result',
        description: 'Scan Result will be shown, automatically change a color',
        position: 'top'
      }
    },
    {
      element: '#history',
      popover: {
        title: 'Operation History',
        description: 'Your today\'s current operation history can be shown',
        position: 'top'
      }
    },
    {
      element: '#exporthistories',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'left'
      }
    }
  ],
  OperationPartscan: [
    {
      element: '#status',
      popover: {
        title: 'Part Scan Setting Status',
        description: 'If you have previous part scan item history, recent scan item\'s history will be shown and currently setted',
        position: 'bottom'
      }
    },
    {
      element: '#reset',
      popover: {
        title: 'Setting reset',
        description: 'If you want to change setting information, please click reset button first',
        position: 'bottom'
      }
    },
    {
      element: '#barcode',
      popover: {
        title: 'Scan Assy Barcode',
        description: 'Scan Assy Barcode, you can enter the barcode',
        position: 'bottom'
      }
    },
    {
      element: '#partscanlist',
      popover: {
        title: 'Part Scan List',
        description: 'Scanned Barcode\'s Part Scan List, you can input part scan barcode',
        position: 'bottom'
      }
    },
    {
      element: '#result',
      popover: {
        title: 'Scan Result',
        description: 'Scan Result will be shown, automatically change a color',
        position: 'top'
      }
    },
    {
      element: '#history',
      popover: {
        title: 'Operation History',
        description: 'Your today\'s current operation history can be shown',
        position: 'top'
      }
    },
    {
      element: '#exporthistories',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'left'
      }
    }
  ],
  OperationEol: [
    {
      element: '#check',
      popover: {
        title: 'Print Check',
        description: 'If you want to print item label when you scan the barcode, please check first',
        position: 'bottom'
      }
    },
    {
      element: '#barcode',
      popover: {
        title: 'Scan Assy Barcode',
        description: 'Scan Assy Barcode, you can enter the barcode',
        position: 'bottom'
      }
    },
    {
      element: '#result',
      popover: {
        title: 'Scan Result',
        description: 'Scan Result will be shown, automatically change a color',
        position: 'top'
      }
    },
    {
      element: '#history',
      popover: {
        title: 'Operation History',
        description: 'Your today\'s current operation history can be shown',
        position: 'top'
      }
    },
    {
      element: '#exporthistories',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'left'
      }
    }
  ],
  OperationInspection: [
    {
      element: '#barcode',
      popover: {
        title: 'Scan Assy Barcode',
        description: 'Scan Assy Barcode, you can enter the barcode',
        position: 'bottom'
      }
    },
    {
      element: '#result',
      popover: {
        title: 'Scan Result',
        description: 'Scan Result will be shown, automatically change a color',
        position: 'bottom'
      }
    },
    {
      element: '#inspectionitem',
      popover: {
        title: 'Barcode Info',
        description: 'Your scanned barcode information will be shown',
        position: 'left'
      }
    },
    {
      element: '#inspectionlist',
      popover: {
        title: 'Inspection List',
        description: 'Scanned Barcode\'s Inspection List, you can input inspection result. In this version, please input \'PASS\' or \'FAIL\'',
        position: 'top'
      }
    },
    {
      element: '#reset',
      popover: {
        title: 'Reset button',
        description: 'If you want new information, please click the button',
        position: 'top'
      }
    },
    {
      element: '#history',
      popover: {
        title: 'Operation History',
        description: 'Your today\'s current operation history can be shown',
        position: 'top'
      }
    },
    {
      element: '#exporthistories',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'left'
      }
    }
  ],
  OperationRepair: [
    {
      element: '#barcode',
      popover: {
        title: 'Scan Assy Barcode',
        description: 'Scan Assy Barcode, you can enter the barcode',
        position: 'bottom'
      }
    },
    {
      element: '#result',
      popover: {
        title: 'Scan Result',
        description: 'Scan Result will be shown, automatically change a color',
        position: 'bottom'
      }
    },
    {
      element: '#repairitem',
      popover: {
        title: 'Barcode Info',
        description: 'Your scanned barcode information will be shown',
        position: 'left'
      }
    },
    {
      element: '#repairlist',
      popover: {
        title: 'Repair List',
        description: 'Scanned Barcode\'s Repair List, you can reate or modify repair information',
        position: 'top'
      }
    },
    {
      element: '#reset',
      popover: {
        title: 'Reset button',
        description: 'If you want new information, please click the button',
        position: 'top'
      }
    },
    {
      element: '#history',
      popover: {
        title: 'Operation History',
        description: 'Your today\'s current operation history can be shown',
        position: 'top'
      }
    }
  ],
  OperationProgram: [
    {
      element: '#list',
      popover: {
        title: 'Executable Program List',
        description: 'Executable Program List',
        position: 'top'
      }
    },
    {
      element: '#executebtn',
      popover: {
        title: 'Execute button',
        description: 'If you click the button then execute program now, however only in IE correctly',
        position: 'top'
      }
    }
  ],
  OperationPacking: [
    {
      element: '#barcode',
      popover: {
        title: 'Scan Assy Barcode',
        description: 'Scan Assy Barcode, you can enter the barcode',
        position: 'bottom'
      }
    },
    {
      element: '#result',
      popover: {
        title: 'Scan Result',
        description: 'Scan Result will be shown, automatically change a color',
        position: 'bottom'
      }
    },
    {
      element: '#count',
      popover: {
        title: 'Packing Count',
        description: '<strong>Target Count</strong>: Total Packing Number count, it will be setted in the item master<br /><strong>Count</strong>: Currently Packing Count<br /><strong>If a count equals to total count then the packing number will be packed</strong>',
        position: 'bottom'
      }
    },
    {
      element: '#packinglist',
      popover: {
        title: 'Packing Number Contents List',
        description: 'Scanned Barcode\'s or Searched Packing Number Contents List',
        position: 'top'
      }
    },
    {
      element: '#packingnumber',
      popover: {
        title: 'Packing Number',
        description: 'If you want to search packing number then input the number and click search button<br />However, when the number is empty and you scan the barcode then the number is generated automatically',
        position: 'bottom'
      }
    },
    {
      element: '#searchbtn',
      popover: {
        title: 'Search Button',
        description: 'Search Packing Number, also can input Enter Key',
        position: 'bottom'
      }
    },
    {
      element: '#cancelbtn',
      popover: {
        title: 'Cancel Button',
        description: 'The packing number will be canceled, and the number is no longer used, and barcode can be used to other packing number',
        position: 'bottom'
      }
    },
    {
      element: '#packbtn',
      popover: {
        title: 'Pack Button',
        description: 'The packing number is packed manually',
        position: 'bottom'
      }
    },
    {
      element: '#printbtn',
      popover: {
        title: 'Print Button',
        description: 'The packing number label will be printed',
        position: 'bottom'
      }
    }
  ],
  AssemblyHistory: [
    {
      element: '#lineduration',
      popover: {
        title: 'Line and Duration Search',
        description: 'Default search conditions and setted today.<br />Of course, you can change the values',
        position: 'bottom'
      }
    },
    {
      element: '#assy',
      popover: {
        title: 'Assy Search',
        description: 'Assy Item information search',
        position: 'bottom'
      }
    },
    {
      element: '#part',
      popover: {
        title: 'Part Search',
        description: 'If you want to search part scan information, use these conditions',
        position: 'bottom'
      }
    },
    {
      element: '#operation',
      popover: {
        title: 'Operation Search',
        description: 'Operations, Operator, Part barcode search',
        position: 'bottom'
      }
    },
    {
      element: '#searchbtn',
      popover: {
        title: 'Search Button',
        description: 'Search histories, also can input Enter Key',
        position: 'bottom'
      }
    },
    {
      element: '#assemblylist',
      popover: {
        title: 'Assembly History List',
        description: 'Searched Assembly History List',
        position: 'bottom'
      }
    },
    {
      element: '#exportlist',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'bottom'
      }
    }
  ],
  SystemProgram: [
    {
      element: '#printinglist',
      popover: {
        title: 'Printing Program List',
        description: 'Printing Program List',
        position: 'bottom'
      }
    },
    {
      element: '#addprintingbtn',
      popover: {
        title: 'Add Printing Program',
        description: 'You can add printing program, program types are url or file and input some conditions and parameters',
        position: 'bottom'
      }
    },
    {
      element: '#exportprinting',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'bottom'
      }
    },
    {
      element: '#executablelist',
      popover: {
        title: 'Executable Program List',
        description: 'Executable Program List',
        position: 'bottom'
      }
    },
    {
      element: '#addexecutablebtn',
      popover: {
        title: 'Add Executable Program',
        description: 'You can add executable program, program types are url or file and input some conditions',
        position: 'bottom'
      }
    },
    {
      element: '#exportexecutable',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'bottom'
      }
    }
  ],
  SystemPrint: [
    {
      element: '#list',
      popover: {
        title: 'Printing Information List',
        description: 'Printing Information List',
        position: 'bottom'
      }
    },
    {
      element: '#createbtn',
      popover: {
        title: 'Printing Info Creation',
        description: 'Printing Information Creation Modal Window will be appeared',
        position: 'bottom'
      }
    },
    {
      element: '#exportlist',
      popover: {
        title: 'Export Excel',
        description: 'Export excel data below list',
        position: 'bottom'
      }
    }
  ],
  SystemLog: [
    {
      element: '#date',
      popover: {
        title: 'Search Date',
        description: 'Default today search',
        position: 'bottom'
      }
    },
    {
      element: '#searchbtn',
      popover: {
        title: 'Search Button',
        description: 'Search logs',
        position: 'bottom'
      }
    },
    {
      element: '#loglist',
      popover: {
        title: 'Log List',
        description: 'Connection Log List',
        position: 'bottom'
      }
    }
  ]
}

export default steps
