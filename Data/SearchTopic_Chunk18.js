define({"1205":{y:0,u:"../Content/release_notes/993/GLIMS-12344.htm",l:-1,t:"Release notes 9.9.3 - Correction of Order.Attribute(\"RequestList\") for electronically created orders (GLIMS-12344)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Correction of Order.Attribute(\"RequestList\") for electronically created orders (GLIMS-12344) An issue was reported where the  Order.Attribute(\"RequestList\")  MISPL function did not work for electronically created orders if it was used in the  MISPL expression  calculating the ..."},"1206":{y:0,u:"../Content/db/reference_guide/externalinfosystem.htm",l:-1,t:"GLIMS reference guide - ExternalInfoSystem",i:9.0406209932828E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nTrix \nTrix \nName of the external system from which info can be retrieved \nFields SpecificSite . ExternalInfoSystem \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"1207":{y:0,u:"../Content/release_notes/990/GLIMS_BTM-01012.htm",l:-1,t:"Release notes 9.9.0 - Correction of error occurring when scanning blood bag with blood bag typing indicated (GLIMS_BTM-01012)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Correction of error occurring when scanning blood bag with blood bag typing indicated (GLIMS_BTM-01012) Since GLIMS 9.6, when  a blood blood bag with a barcode starting with \"=%\" was scanned, and the  blood bag typing  was indicated, an error message, \"No antigen available\", ..."},"1208":{y:0,u:"../Content/release_notes/990/GLIMS_BAC-01456.htm",l:-1,t:"Release notes 9.9.0 - Incorrect printing order of isolation test labels (GLIMS_BAC-01456)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Incorrect printing order of isolation test labels (GLIMS_BAC-01456) When  printing isolation test labels  using the printer icon in the isolation test browser of the microbiology work screen, the labels were not printed in the same order as the order in which the isolation ..."},"1209":{y:0,u:"../Content/release_notes/997/GLIMS-13376.htm",l:-1,t:"Release notes 9.9.7 - Specimen AfterConfirm trigger called twice upon specimen availability confirmation (GLIMS-13376)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Specimen AfterConfirm trigger called twice upon specimen availability confirmation (GLIMS-13376) The specimen AfterConfirm trigger was called twice for the same specimen when confirming its availability. This issue, which occurred since GLIMS 9.9, has been corrected."},"1210":{y:0,u:"../Content/release_notes/990/GLIMS_BILL-03663.htm",l:-1,t:"Release notes 9.9.0 - Presence of payment agreement information in URL of LDT reports (GLIMS_BILL-03663)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Presence of payment agreement information in URL of LDT reports (GLIMS_BILL-03663) When the prescription time of an order (set) preceded the start date of the corresponding payment agreement, the payment agreement information was missing in the URL of LDT reports. This has ..."},"1211":{y:0,u:"../Content/release_notes/960/MATE-04065.htm",l:-1,t:"Release notes 9.6.0 - Login screen title cut off (MATE-04065)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Login screen title cut off (MATE-04065) A cosmetic issue was identified where the login screen title was cut off in the Dutch version of GLIMS (e.g. the user would see \"Selecteer een dep...\" instead of \"Selecteer een department\"). This has been corrected."},"1212":{y:0,u:"../Content/db/reference_guide/ml39.htm",l:-1,t:"GLIMS reference guide - um_RibbonItemLabel",i:0.000118240955207177,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nLabel Text \nml39 \ngenrw \nno \nno \nNone \nFields \nId Mandatory Unique Automatic PositiveInteger Id \nRibbon item \nRibbon item this is translation of Label Mandatory Invariant  um_RibbonItem Label \nLanguage \nLanguage of ..."},"1213":{y:0,u:"../Content/release_notes/990/MATE-06281.htm",l:-1,t:"Release notes 9.9.0 - Prevent the import of the gp_DbVersion table into another database (MATE-06281)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Prevent the import of the gp_DbVersion table into another database (MATE-06281) Exporting and importing the gp_DbVersion table can lead to inconsistencies in the target database. This modification therefore makes it impossible for end-users to export-import this table."},"1214":{y:0,u:"../Content/db/reference_guide/electronicsignaturestatus.htm",l:-1,t:"GLIMS reference guide - ElectronicSignatureStatus",i:7.59206812478571E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nNot applicable \nNA \n2 \nTo do \nTodo \n3 \nDone \nDone \nStatus of the electronic signature of the report \nFields Report . SignatureStatus \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"1215":{y:0,u:"../Content/release_notes/980/BILX_GKVDT-00126.htm",l:-1,t:"Release notes 9.8.0 - KVDT export: option to remove open orders for a patient from the shipment (BILX_GKVDT-00126)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  KVDT export: option to remove open orders for a patient from the shipment (BILX_GKVDT-00126) Context To comply with German legislation, the quarterly export of financial data in the German KVDT format cannot contain invoices for a patient with open orders within the same ..."},"1216":{y:0,u:"../Content/release_notes/993/BILX_CARE-00014.htm",l:-1,t:"Release notes 9.9.3 - \"Insurability date\" field only visible for customers using MyCareNet functionality (BILX_CARE-00014)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  \"Insurability date\" field only visible for customers using MyCareNet functionality (BILX_CARE-00014) The Insurability date field in the Extra tab of the order entry screen is only intended for customers using the MyCareNet functionality in GLIMS. To avoid confusion among ..."},"1217":{y:0,u:"../Content/release_notes/930/GLIMS_SERO-00135.htm",l:-1,t:"Release notes 9.3.0 - MISPL function to get coordinates of item storage (GLIMS_SERO-00135)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  MISPL function to get coordinates of item storage (GLIMS_SERO-00135) An  ItemStorage -based MISPL function named Coordinates has been added which allows to retrieve the coordinates of an item storage."},"1218":{y:0,u:"../Content/release_notes/996/GLIMS_HYB-00028.htm",l:-1,t:"Release notes 9.9.6 - Fixed incomplete HyBase configuration dump file GLIMS2.ini  (GLIMS_HYB-00028)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  Fixed incomplete HyBase configuration dump file GLIMS2.ini  (GLIMS_HYB-00028) When running the  HyBase export program  with Version = Extended Dump configuration enabled the created GLIMS2.INI file (containing the headers for the exported data) was incomplete: it contained ..."},"1219":{y:0,u:"../Content/release_notes/950/MATE-03689.htm",l:-1,t:"Release notes 9.5.0 - Issue with special system manager privileges (MATE-03689)",i:4.36103210702897E-05,a:"Release notes 9.5.0 -  Issue with special system manager privileges (MATE-03689) Background information System managers have access to all fields, functions and tables. They also have the authority to assign privileges to users. Exception: system managers will not have access to functions, tables or ..."},"1220":{y:0,u:"../Content/release_notes/990/GLIMS-12006.htm",l:-1,t:"Release notes 9.9.0 - Study-related order is created without requests (GLIMS-12006)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Study-related order is created without requests (GLIMS-12006) An issue was reported where creating an order with a study and request codes of issuer-specific request definitions (where the Issuer matches the Study issuer) resulted in an order without requests for these request ..."},"1221":{y:0,u:"../Content/release_notes/990/GLIMS-12012.htm",l:-1,t:"Release notes 9.9.0 - No more error when opening the urgency monitor query options  (GLIMS-12012)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  No more error when opening the urgency monitor query options  (GLIMS-12012) An issue was detected where the error \"Parentprocedure is not known to WindowManager. Orphans are not allowed\" was shown when opening the .NET  urgency monitor  in debug mode. This issue has been ..."},"1222":{y:0,u:"../Content/db/reference_guide/graphorientation.htm",l:-1,t:"GLIMS reference guide - GraphOrientation",i:0.000101748469686948,a:"\nValue \nEnumerator \nAbbreviation \n1 \nHorizontal \nHorizontal \n2 \nVertical \nVertical \nFields \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"1223":{y:0,u:"../Content/db/reference_guide/csys.htm",l:-1,t:"GLIMS reference guide - CodingSystem",i:0.000351229773399487,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nCoding system \ncsys \nglims \nyes \nyes \nNormal \nDefines externally used coding systems. A coding system can be used for defining external codes for records, grouped together via a Code Set for this specific coding system ..."},"1224":{y:0,u:"../Content/release_notes/960/MATE_SETUP-00243.htm",l:-1,t:"Release notes 9.6.0 - Update pinstall script to create Cpage schema holder (MATE_SETUP-00243)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Update pinstall script to create Cpage schema holder (MATE_SETUP-00243) An option has been added to the pinstall script (for UNIX) to install a Cpage schema holder for connecting a Cpage Oracle database. The connection files are also supplied. Usage pinstall -c \u003cconfiguration ..."},"1225":{y:0,u:"../Content/release_notes/993/GLIMS-12223.htm",l:-1,t:"Release notes 9.9.3 - Specimen reception scan no longer checks if an order is older than 14 days (GLIMS-12223)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Specimen reception scan no longer checks if an order is older than 14 days (GLIMS-12223) The  specimen reception scan  program now no longer checks if the order for which a specimen needs to be created has a lowest object time of more than 14 days ago. In previous versions,  ..."},"1226":{y:0,u:"../Content/release_notes/990/GLIMS_BAC-01560.htm",l:-1,t:"Release notes 9.9.0 - Microbiology work screen can be edited again if accessed from the isolation query (GLIMS_BAC-01560)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Microbiology work screen can be edited again if accessed from the isolation query (GLIMS_BAC-01560) The  microbiology work screen , if opened by double clicking in the  isolation browser , could not be edited. This issue, which occurred since GLIMS 9.8, has been corrected."},"1227":{y:0,u:"../Content/release_notes/940/MATE_RB-00003.htm",l:-1,t:"Release notes 9.4.0 - Enhancements for electrophoresis graphs (MATE_RB-00003)",i:4.36103210702897E-05,a:"Release notes 9.4.0 -  Enhancements for electrophoresis graphs (MATE_RB-00003) Introduction Report builder has support for the display of electrophoresis graphs on GLIMS result reports since GLIMS 8.5. Enhancement requests were filed by customers to match the \u0027traditional\u0027 look of such ..."},"1228":{y:0,u:"../Content/release_notes/950/GLIMS-06835.htm",l:-1,t:"Release notes 9.5.0 - Extensions for result dilution (GLIMS-06835)",i:4.36103210702897E-05,a:"Release notes 9.5.0 -  Extensions for result dilution (GLIMS-06835) The support for result dilution has been extended. For more details, please check the chapter  Dilutions ."},"1229":{y:0,u:"../Content/release_notes/980/GLIMS_BAC-01146.htm",l:-1,t:"Release notes 9.8.0 - Option to hide carrier test browser in microbiology screen (GLIMS_BAC-01146)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Option to hide carrier test browser in microbiology screen (GLIMS_BAC-01146) A new option Show carrier test browse has been added in the  microbiology procedure configuration screen . If this option is disabled, the carrier test browser will not be shown in the  microbiology ..."},"1230":{y:0,u:"../Content/release_notes/980/MATE-04393.htm",l:-1,t:"Release notes 9.8.0 - Correction for Quick report ribbon item (MATE-04393)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Correction for Quick report ribbon item (MATE-04393) An issue was reported where the Quick report ribbon item did no longer work after having closed the Quick report window with the Close button. Example Open the Orders by internal id browser. Click on the Result overview ..."},"1231":{y:0,u:"../Content/db/reference_guide/ml09.htm",l:-1,t:"GLIMS reference guide - IvocRjctonTypxtrnlDscrpt",i:0.000103333355961854,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nExternal description Text \nml09 \nglims \nno \nno \nNormal \nFields \nInvoice rejection type \nInvoice rejection type this is translation of External descriptio Mandatory Invariant  InvoiceRejectionType ExternalDescription \nId ..."},"1232":{y:0,u:"../Content/release_notes/930/GLIMS_QC-00562.htm",l:-1,t:"Release notes 9.3.0 - Protect QC lot and QC population from being deleted \n (GLIMS_QC-00562)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Protect QC lot and QC population from being deleted \n (GLIMS_QC-00562) Introduction In the context of the ISO 15189 norm, a check has been implemented that \n prevents QC lots and QC populations from being deleted too soon. New feature A new option \"QC lot validity \n in years\" ..."},"1233":{y:0,u:"../Content/release_notes/960/GLIMS-07602.htm",l:-1,t:"Release notes 9.6.0 - Incomplete results browser should display the property short name (GLIMS-07602)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Incomplete results browser should display the property short name (GLIMS-07602) The  Incomplete results  browser (Start \u003e Routine \u003e Results \u003e Incomplete results) displayed the Mnemonic of the Property even when its Short name was available. This was not consistent with ..."},"1234":{y:0,u:"../Content/release_notes/980/MATE-05592.htm",l:-1,t:"Release notes 9.8.0 - Disappearing contextual menus (MATE-05592)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Disappearing contextual menus (MATE-05592) Problem description Possible scenario: Select Start \u003e System management \u003e Security \u003e Security Center. Select the Users tab page to open the User browser. Right-click on a User record to open the contextual menu, choose e.g. Favorites ..."},"1235":{y:0,u:"../Content/db/reference_guide/tar.htm",l:-1,t:"GLIMS reference guide - Tariff",i:0.000306904627483096,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nTariff \ntar \nglims \nyes \nyes \nNormal \nEach tariff (= price list entry) record represents an entry of a billing code in a price list. It has a limited validity date range. \nFields \nOther \u003e Account \nThis field provides ..."},"1236":{y:0,u:"../Content/db/reference_guide/orec.htm",l:-1,t:"GLIMS reference guide - OrderRecurrence",i:0.000124032168848569,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nOrder recurrence \norec \nglims \nyes \nyes \nNone \nDefines the cycle parameters for an order that should be repeated several times during a given period with a given frequency. \nFields \nCreation time Automatic ..."},"1237":{y:0,u:"../Content/db/reference_guide/were.htm",l:-1,t:"GLIMS reference guide - w_ExtendedResult",i:9.8002008213352E-05,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nExtended result \nwere \nN.A. \nno \nyes \nNone \nFields \nFlags Calculated String Flags \nId Mandatory Unique Automatic PositiveInteger Id \nQC Calculated String IsQCMark \nNorm Calculated String Norm \nObject Mandatory Automatic ..."},"1238":{y:0,u:"../Content/release_notes/960/GLIMS_Path-00328.htm",l:-1,t:"Release notes 9.6.0 - New function \"Process blocks and slides by number\" (GLIMS_Path-00328)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  New function \"Process blocks and slides by number\" (GLIMS_Path-00328) Introduction The new function Process blocks and slides by number is now available in the GLIMS Anatomic pathology module. It is similar to the  Specimen.ProcessByNumber  function. It can be accessed from ..."},"1239":{y:0,u:"../Content/release_notes/990/GLIMS-11696.htm",l:-1,t:"Release notes 9.9.0 - Correct default value of parameter of ProductSpecification-based tool Lots (GLIMS-11696)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Correct default value of parameter of ProductSpecification-based tool Lots (GLIMS-11696) When changing the parameter Needs verification in the function parameter set of the ProductSpecification-based  tool Lots (i.e. referring to the function mnemonic Lots), the value \"?\" was ..."},"1240":{y:0,u:"../Content/db/reference_guide/variantresultstatus.htm",l:-1,t:"GLIMS reference guide - VariantResultStatus",i:0.000120611850691003,a:"\nValue \nEnumerator \nAbbreviation \n1 \nAvailable \nAvl \n2 \nConfirmed \nCnf \n3 \nValidated \nVal \n4 \nDiscontinued \nDsc \nFields VariantResult . Status \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"1241":{y:0,u:"../Content/db/reference_guide/grubbsprobability.htm",l:-1,t:"GLIMS reference guide - GrubbsProbability",i:6.98657253628316E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \n0.100 \n0.100 \n2 \n0.050 \n0.050 \n3 \n0.025 \n0.025 \n4 \n0.010 \n0.010 \n5 \n0.005 \n0.005 \nFields QCPopulation . GrubbsProbability \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"1242":{y:0,u:"../Content/release_notes/990/GLIMS-10815.htm",l:-1,t:"Release notes 9.9.0 - Report completeness time is  set when generating a PDF report (GLIMS-10815)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Report completeness time is  set when generating a PDF report (GLIMS-10815) The field  Completeness time  under the Status tab of the Report editor stores the date and time at which a report was first generated as a complete report. However, when a PDF report was generated ..."},"1243":{y:0,u:"../Content/release_notes/992/GLIMS-12272.htm",l:-1,t:"Release notes 9.9.2 - No more creation of unused log type \"Read audit Result\" (GLIMS-12272)",i:4.36103210702897E-05,a:"Release notes 9.9.2 -  No more creation of unused log type \"Read audit Result\" (GLIMS-12272) Opening the results of report browser via the contextual menu item Result preview on Report now no longer creates the superfluous Read audit Result log type."},"1244":{y:0,u:"../Content/release_notes/990/GLIMS_BILL-03686.htm",l:-1,t:"Release notes 9.9.0 - Failure of Invoice item function Credit-note creation should trigger warning message (GLIMS_BILL-03686)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Failure of Invoice item function Credit-note creation should trigger warning message (GLIMS_BILL-03686) When crediting an invoice item via the contextual ribbon / menu option Credit-note creation, the user was not informed if the execution of the function failed, for instance, ..."},"1245":{y:0,u:"../Content/release_notes/980/MATE-04368.htm",l:-1,t:"Release notes 9.8.0 - Improve performance of upgrade from GLIMS 9.5 to GLIMS 9.8 on Oracle (MATE-04368)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Improve performance of upgrade from GLIMS 9.5 to GLIMS 9.8 on Oracle (MATE-04368) The performance of the upgrade from GLIMS 9.5 to GLIMS 9.8 on Oracle systems has been improved. Note In GLIMS 9.6, the Oracle schema is simplified and all columns that were once \u0027logically\u0027 ..."},"1246":{y:0,u:"../Content/release_notes/960/GLIMS_BILL-03174.htm",l:-1,t:"Release notes 9.6.0 - Cash register correctly displayed in window title when opening payment (GLIMS_BILL-03174)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Cash register correctly displayed in window title when opening payment (GLIMS_BILL-03174) The cash register mnemonic is now displayed correctly in the window title when opening a payment done via a cash register."},"1247":{y:0,u:"../Content/release_notes/980/GLIMS-08399.htm",l:-1,t:"Release notes 9.8.0 - Display and translation of severity result flags (GLIMS-08399)",i:6.21447220017015E-05,a:"Release notes 9.8.0 -  Display and translation of severity result flags (GLIMS-08399) This modification solves two issues regarding the display of severity result flags in Result browsers: The result flag column in some browsers was not larged enough to display all possible flags. The English result ..."},"1248":{y:0,u:"../Content/release_notes/990/MATE-05775.htm",l:-1,t:"Release notes 9.9.0 - Windows system tray no longer shows OpenEdge icon (MATE-05775)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Windows system tray no longer shows OpenEdge icon (MATE-05775) The OpenEdge icon  shown in the system tray when a connection is made to the AppServer was not cleaned up properly by Windows. Therefore, the icon will now no longer be shown."},"1249":{y:0,u:"../Content/db/reference_guide/messagenodetype.htm",l:-1,t:"GLIMS reference guide - MessageNodeType",i:8.94911359394997E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nBranch \nBranch \n2 \nConstant \nConstant \n3 \nMember \nMember \n4 \nFunction \nFunction \nFields io_MessageNode . Type \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"1250":{y:0,u:"../Content/release_notes/990/GLIMS_ANLZ-01355.htm",l:-1,t:"Release notes 9.9.0 - Specimen confirmation on scan can be restricted to departments of the same laboratory site (GLIMS_ANLZ-01355)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Specimen confirmation on scan can be restricted to departments of the same laboratory site (GLIMS_ANLZ-01355) Context Normally, when a specimen is scanned, it is automatically confirmed \n if this was not yet the case. However, the setting  Confirm specimen on scan   allows ..."},"1251":{y:0,u:"../Content/release_notes/990/GLIMS-10852.htm",l:-1,t:"Release notes 9.9.0 - Incorrect scheduling when adding a property  on one of multiple specimens in a panel (GLIMS-10852)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Incorrect scheduling when adding a property  on one of multiple specimens in a panel (GLIMS-10852) Issue A scheduling issue occurred in the following (or a similar) scenario: A panel exists containing  two materials. A property exists which can be scheduled on both materials ..."},"1252":{y:0,u:"../Content/release_notes/994/MATE-06688.htm",l:-1,t:"Release notes 9.9.4 - Maximum execution time check for lg_Log.Purge (MATE-06688)",i:4.36103210702897E-05,a:"Release notes 9.9.4 -  Maximum execution time check for lg_Log.Purge (MATE-06688) The  lg_Log.Purge  has a built-in maximum execution time. If a run of such a purge task takes more than 30 minutes, it is interrupted. The remaining logs are processed at the next task run. In previous versions, the ..."},"1253":{y:0,u:"../Content/db/reference_guide/rtfd.htm",l:-1,t:"GLIMS reference guide - rt_Field",i:0.000183032829351854,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nField \nrtfd \ngenro \nno \nno \nNone \nTable accessible at run-time containing all fields of the known tables \nFields \nId \nPrimary key. Automatically generated identifier whose value uniquely identifies each record. ..."},"1254":{y:0,u:"../Content/release_notes/990/GLIMS_BAC-01550.htm",l:-1,t:"Release notes 9.9.0 - Allow automatic confirmation when applying an antibiotic result default (GLIMS_BAC-01550)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Allow automatic confirmation when applying an antibiotic result default (GLIMS_BAC-01550) Context GLIMS allows the user to configure a default result value for a given antibiotic via an  antibiotic result default  record. The antibiotic result default is used for a newly ..."},"1255":{y:0,u:"../Content/db/reference_guide/ab.htm",l:-1,t:"GLIMS reference guide - Antibiotic",i:0.000348788941005373,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nAntibiotic \nab \nglims \nyes \nyes \nNormal \nThis table stores the definitions of antibiotics. \nFields \nReport \u003e Auto reportable \nIndicates if results for this antibiotic will automatically be included on reports. This can ..."},"1256":{y:0,u:"../Content/release_notes/980/GLIMS_BILL-03262.htm",l:-1,t:"Release notes 9.8.0 - Correction for context function \"Refund the unbalanced amount\" (GLIMS_BILL-03262)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Correction for context function \"Refund the unbalanced amount\" (GLIMS_BILL-03262) An issue was reported when using the context function Refund the unbalanced amount for a payment and changing the Date in the payment window that subsequently appears. After closing the window by ..."},"1257":{y:0,u:"../Content/release_notes/990/GLIMS_LM-00048.htm",l:-1,t:"Release notes 9.9.0 - Session crash error fixed in the Logistics Manager module (GLIMS_LM-00048)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Session crash error fixed in the Logistics Manager module (GLIMS_LM-00048) An issue was reported where GLIMS would crash the session when the user: Logged on in GLIMS and opened the  Logistics Manager  module. Logged off and then back on in GLIMS. Opened the Logistics manager ..."},"1258":{y:0,u:"../Content/db/reference_guide/mqct.htm",l:-1,t:"GLIMS reference guide - MBQCTest",i:0.000173819978760332,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nMicrobiology qc test \nmqct \nglims \nyes \nyes \nNone \nFields \nActive \nIs this test still active? Mandatory Logical Active \nCategory \nFree text, for selection purposes String Category \nOutcome \u003e Choice list \nA list of ..."},"1259":{y:0,u:"../Content/db/reference_guide/normformat.htm",l:-1,t:"GLIMS reference guide - NormFormat",i:9.0406209932828E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nPacked \nPacked \n2 \nJustified \nJustified \n3 \nJustified; brackets \nJustified; brackets \n4 \nLeft-aligned \nLeft-aligned \n5 \nLeft-aligned; brackets \nLeft-aligned; brackets \n6 \nRight-aligned \nRight-aligned \n7 \nRight-aligned; brackets \nRight-aligned; brackets \n8 ..."},"1260":{y:0,u:"../Content/release_notes/930/GLIMS-06158.htm",l:-1,t:"Release notes 9.3.0 - Support for order\u0027s \"entering device\" (GLIMS-06158)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Support for order\u0027s \"entering device\" (GLIMS-06158) Introduction Several changes have been implemented to register the device by which an order was entered (GLIMS-06158, GLIMS-06162, GLIMS-06226, GLIMS_POC-00046, GLIMS_OI-00500). Tip Tip: Modification  MATE-02664  introduces a ..."},"1261":{y:0,u:"../Content/release_notes/930/MATE-02487.htm",l:-1,t:"Release notes 9.3.0 - Report builder checks required files (MATE-02487)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Report builder checks required files (MATE-02487) Some customers reported problems with Report builder that were a consequence of missing .jar files. Now we check if all the .jar files are actually present on the hard disk before loading the JavaVM."},"1262":{y:0,u:"../Content/release_notes/960/GLIMS_BILL-03250.htm",l:-1,t:"Release notes 9.6.0 - Use fund-specific price list during tariffication (GLIMS_BILL-03250)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Use fund-specific price list during tariffication (GLIMS_BILL-03250) In the  Policy clause  configuration screen, the option Price list type now allows to indicate that the fund-specific price list should be used during tariffication. Price list type Standard Price list ..."},"1263":{y:0,u:"../Content/release_notes/980/GLIMS-08255.htm",l:-1,t:"Release notes 9.8.0 - Improved performance of queries for specimen reviews and incomplete results (GLIMS-08255)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Improved performance of queries for specimen reviews and incomplete results (GLIMS-08255) Queries for specimen reviews and incomplete results often lasted too long in the GLIMS Oracle version. The performance has been improved."},"1264":{y:0,u:"../Content/release_notes/950/GLIMS-06667.htm",l:-1,t:"Release notes 9.5.0 - Apply blocking period to Available specimens only (GLIMS-06667)",i:4.36103210702897E-05,a:"Release notes 9.5.0 -  Apply blocking period to Available specimens only (GLIMS-06667) When adding a request to an order, GLIMS will now only consider Available specimens when checking if the  blocking period  is respected. Note This implies that it is possible to request a request code multiple ..."},"1265":{y:0,u:"../Content/release_notes/991/GLIMS_ANLZ-01202.htm",l:-1,t:"Release notes 9.9.1 - Station.UnknownSpecimenTrigger should have access to \"ManualId\" in ASTM O.4.1.1 (GLIMS_ANLZ-01202)",i:4.36103210702897E-05,a:"Release notes 9.9.1 -  Station.UnknownSpecimenTrigger should have access to \"ManualId\" in ASTM O.4.1.1 (GLIMS_ANLZ-01202) Context: Retrieving data from the result message sent by the POC analyzer The Unknown specimen trigger (MISPL function) of a  Station  has access to data in the ASTM result ..."},"1266":{y:0,u:"../Content/db/reference_guide/objecttype.htm",l:-1,t:"GLIMS reference guide - ObjectType",i:0.000149052957572126,a:"\nValue \nEnumerator \nAbbreviation \n1 \nAnimal \nA \n2 \nLot \nL \n3 \nPerson \nP \n4 \nUnknown \nU \n5 \nQC lot \nQC \nFields Object . Type UnknownObject . PreliminaryType \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"1267":{y:0,u:"../Content/release_notes/990/GLIMS_BAC-01572.htm",l:-1,t:"Release notes 9.9.0 - Changing an isolation\u0027s microorganism should not change the isolation\u0027s reportability if the latter was changed manually (GLIMS_BAC-01572)",i:9.84642683124808E-05,a:"Release notes 9.9.0 -  Changing an isolation\u0027s microorganism should not change the isolation\u0027s reportability if the latter was changed manually (GLIMS_BAC-01572) Context A  microorganism  is configured with the option Mark as reportable set to Yes. In the  microbiology work screen , if an  isolation ..."},});