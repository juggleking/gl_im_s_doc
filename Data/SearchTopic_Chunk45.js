define({"2912":{y:0,u:"../Content/release_notes/997/GLIMS_BTM-01211.htm",l:-1,t:"Release notes 9.9.7 - Error handling/focus on manual blood bag scan was sometimes wrong (GLIMS_BTM-01211)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Error handling/focus on manual blood bag scan was sometimes wrong (GLIMS_BTM-01211) Issue The cursor was not positioned in the correct field during manual blood bag scanning when the wrong fields were filled out or mandatory fields were not filled out. This was especially the ..."},"2913":{y:0,u:"../Content/release_notes/990/MATE_MSOF-00042.htm",l:-1,t:"Release notes 9.9.0 - Correction of errors occurring when exporting browser content to Excel (MATE_MSOF-00042)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Correction of errors occurring when exporting browser content to Excel (MATE_MSOF-00042) An issue was reported where exporting the content of a  Classic browser  to Excel resulted in error messages if Excel was already open.  This has been corrected."},"2914":{y:0,u:"../Content/release_notes/990/GLIMS-11462.htm",l:-1,t:"Release notes 9.9.0 - Consistency check tool : deletion of pending request with tariffing status higher than Initial (GLIMS-11462)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Consistency check tool : deletion of pending request with tariffing status higher than Initial (GLIMS-11462) An issue was reported regarding the  Consistency check  tool. When the function to activate pending requests was used, an error was returned if a pending request had a ..."},"2915":{y:0,u:"../Content/release_notes/993/GLIMS_BAC-01531.htm",l:-1,t:"Release notes 9.9.3 - Microbiology work screen no longer opens a browser of micro-organisms of the wrong type (GLIMS_BAC-01531)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Microbiology work screen no longer opens a browser of micro-organisms of the wrong type (GLIMS_BAC-01531) The following issue, which occurred since GLIMS 9.8, has been corrected: Context An order has one microbiology material and several microbiology actions. The microbiology ..."},"2916":{y:0,u:"../Content/db/reference_guide/fmpr.htm",l:-1,t:"GLIMS reference guide - FamilyPregnancy",i:0.000121510561743835,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nFamily pregnancy \nfmpr \nglims \nyes \nyes \nNormal \nRepresents a pregnancy in the pedigree tool. \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser \nDrawing info \nInternal ..."},"2917":{y:0,u:"../Content/release_notes/990/GLIMS-10656.htm",l:-1,t:"Release notes 9.9.0 - Correction of issue with \"Confirm specimens\" in the Order series program (GLIMS-10656)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Correction of issue with \"Confirm specimens\" in the Order series program (GLIMS-10656) When a  series of orders  was created and the option Confirm specimen was activated, the specimens were not automatically registered. Their status remained Initial instead of turning to ..."},"2918":{y:0,u:"../Content/release_notes/980/GLIMS-08238.htm",l:-1,t:"Release notes 9.8.0 - Correction for error when using \"person merge\" (GLIMS-08238)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Correction for error when using \"person merge\" (GLIMS-08238) An issue was reported where an error occurred when merging lookalikes (Start \u003e Correspondents \u003e Persons \u003e Lookalikes) and closing the Person merge log window (i.e. the log of the executed actions which opens when the ..."},"2919":{y:0,u:"../Content/release_notes/980/GLIMS-07769.htm",l:-1,t:"Release notes 9.8.0 - Issue with age-specific norms (GLIMS-07769)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Issue with age-specific norms (GLIMS-07769) An issue was reported where an age-specific norm was applied to a patient with unknown birth date (age). This has been corrected."},"2920":{y:0,u:"../Content/db/reference_guide/dptg.htm",l:-1,t:"GLIMS reference guide - DepartmentGroup",i:0.000255348578008158,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nDepartment group \ndptg \nglims \nyes \nyes \nNormal \nDepartment groups indicate which departments can share results. \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser ..."},"2921":{y:0,u:"../Content/release_notes/997/GLIMS_BTM-01223.htm",l:-1,t:"Release notes 9.9.7 - Undo transfusion was not possible in a German GLIMS client (GLIMS_BTM-01223)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Undo transfusion was not possible in a German GLIMS client (GLIMS_BTM-01223) Issue This modification fixes the issue where  Undo transfusion  was not possible in a German GLIMS client due to a comma in the translation. A warning message was shown and the blood bag status ..."},"2922":{y:0,u:"../Content/release_notes/995/GLIMS_BAC-01732.htm",l:-1,t:"Release notes 9.9.5 - Performance issue when retrieving microbiology actions for a given person (GLIMS_BAC-01732)",i:4.36103210702897E-05,a:"Release notes 9.9.5 -  Performance issue when retrieving microbiology actions for a given person (GLIMS_BAC-01732) Any microbiology action query where no Sampled from range is specified was slower than expected. This issue, which occurred since GLIMS 9.8.13, has been corrected: the performance of ..."},"2923":{y:0,u:"../Content/db/reference_guide/wltg.htm",l:-1,t:"GLIMS reference guide - WorkListTemplateGroup",i:0.000181854359131313,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nWork list template group \nwltg \nglims \nyes \nyes \nNormal \nEach record of this table represents a group of worklist templates. \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  ..."},"2924":{y:0,u:"../Content/release_notes/990/GLIMS-11692.htm",l:-1,t:"Release notes 9.9.0 - Issues with some redesigned .NET browsers if GLIMS is used on an Oracle database (GLIMS-11692)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Issues with some redesigned .NET browsers if GLIMS is used on an Oracle database (GLIMS-11692) Issue The following issue occurred when GLIMS was used in combination with an Oracle database:  fast-positioning  does not always work as expected in some redesigned (.NET) browsers ..."},"2925":{y:0,u:"../Content/db/reference_guide/chcl.htm",l:-1,t:"GLIMS reference guide - ChoiceList",i:0.000299198326872133,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nChoice list \nchcl \nglims \nyes \nyes \nNone \nA choice list contains a number of choice records which can be chosen during a particular operation. For instance, when a property of data type \u0027enumerated\u0027 refers to a choice ..."},"2926":{y:0,u:"../Content/release_notes/990/GLIMS-11434.htm",l:-1,t:"Release notes 9.9.0 - Identifications exported by \"Export configuration data\" tool (GLIMS-11434)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Identifications exported by \"Export configuration data\" tool (GLIMS-11434) The Export configuration data tool (for  Progress  and  Oracle ) did not export the Identifications of  Correspondents  (such as Organizations). Consequently, if the exported data were imported into ..."},"2927":{y:0,u:"../Content/db/reference_guide/pid.htm",l:-1,t:"GLIMS reference guide - w_Identification",i:7.59404520189309E-05,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nIdentification \npid \nN.A. \nno \nno \nNone \nStores patient identifications as \u003ccode\u003e/\u003cassigning authority\u003e pairs. \nFields \nAssigning authority \nThe authority that assigned the identification to the patient. Mandatory ..."},"2928":{y:0,u:"../Content/db/reference_guide/actioninputstatus.htm",l:-1,t:"GLIMS reference guide - ActionInputStatus",i:9.80853235112425E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nConnecting \nCnc \n2 \nExpected \nExp \n3 \nAvailable \nAvl \nFields SpecimenInput . Status ResultInput . Status \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"2929":{y:0,u:"../Content/release_notes/940/MATE_RB-00024.htm",l:-1,t:"Release notes 9.4.0 - Introduction of Report builder service (MATE_RB-00024)",i:8.06791229331134E-05,a:"Release notes 9.4.0 -  Introduction of Report builder service (MATE_RB-00024) Background information The Report builder architecture has evolved over the years.  It started on Windows as an in-process JavaVM.  When adding support for UNIX, we implemented it as a separate MipsJvmDaemon Java process.  ..."},"2930":{y:0,u:"../Content/release_notes/994/GLIMS-11941.htm",l:-1,t:"Release notes 9.9.4 - Fixed \"Auto prompt on extra info\" option for requests added to existing specimens (GLIMS-11941)",i:4.36103210702897E-05,a:"Release notes 9.9.4 -  Fixed \"Auto prompt on extra info\" option for requests added to existing specimens (GLIMS-11941) An issue was reported where the  Auto prompt on extra info  option did not work for requests that were added to an already existing root specimen. This issue, which occurred since ..."},"2931":{y:0,u:"../Content/db/reference_guide/rspn.htm",l:-1,t:"GLIMS reference guide - ResponsibilityHCProvider",i:0.000117132847939567,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nHC provider responsibility \nrspn \nglims \nyes \nyes \nWith Delete Audit \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser \nHC provider Mandatory  HCProvider HCProvider ..."},"2932":{y:0,u:"../Content/db/reference_guide/psgd.htm",l:-1,t:"GLIMS reference guide - PersonGeneticDisorder",i:0.000147145234485823,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nPerson genetic disorder \npsgd \nglims \nyes \nyes \nNormal \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser \nDiagnosis code \nDiagnosis code of genetic disorder which this ..."},"2933":{y:0,u:"../Content/release_notes/995/GLIMS_BAC-01722.htm",l:-1,t:"Release notes 9.9.5 - Allow more than 26 carriers for a microbiology action (GLIMS_BAC-01722)",i:4.36103210702897E-05,a:"Release notes 9.9.5 -  Allow more than 26 carriers for a microbiology action (GLIMS_BAC-01722) Issue Currently, microbiology actions only support up to 26  carriers . If a carrier is deleted, its sequence letter is not reused unless all of the carriers are deleted. This means that users could be ..."},"2934":{y:0,u:"../Content/release_notes/997/GLIMS-13393.htm",l:-1,t:"Release notes 9.9.7 - Specific import functionality for LOINC codes for Properties, Requestables, and Chapters  (GLIMS-13393)",i:7.58440879922584E-05,a:"Release notes 9.9.7 -  Specific import functionality for LOINC codes for Properties, Requestables, and Chapters  (GLIMS-13393) Introduction This modification introduces a specific import functionality for LOINC codes for Properties, Requestables, and Chapters (Property classification nodes). Note ..."},"2935":{y:0,u:"../Content/db/reference_guide/evaluation.htm",l:-1,t:"GLIMS reference guide - Evaluation",i:9.1838006844683E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nOnce \nOnce \n2 \nAlways \nAlways \n3 \nManual \nManual \nFields SpecimenIdentificationType . Evaluation \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"2936":{y:0,u:"../Content/db/reference_guide/sfn.htm",l:-1,t:"GLIMS reference guide - gp_SiteFunction",i:0.00172931582340922,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nSite function \nsfn \ngenrw \nyes \nyes \nWith Delete Audit \nFields \nActive Automatic Logical Active \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser \nData type \nData type of ..."},"2937":{y:0,u:"../Content/db/reference_guide/prpo.htm",l:-1,t:"GLIMS reference guide - PropertyOutput",i:0.000142198868061912,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nProperty output \nprpo \nglims \nyes \nyes \nNormal \nThis table stores models for the output of properties by a given procedure. It indicates that a given property output is carried out by applying an assessment method. ..."},"2938":{y:0,u:"../Content/db/reference_guide/mqcm.htm",l:-1,t:"GLIMS reference guide - MBQCMaterial",i:0.000167623374400533,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nMicrobiology qc material \nmqcm \nglims \nyes \nyes \nNone \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser \nDescription Mandatory String Description \nId Mandatory Unique ..."},"2939":{y:0,u:"../Content/release_notes/940/GLIMS_BAC-01075.htm",l:-1,t:"Release notes 9.4.0 - Antibiogram issue when same value for different formula type (GLIMS_BAC-01075)",i:4.36103210702897E-05,a:"Release notes 9.4.0 -  Antibiogram issue when same value for different formula type (GLIMS_BAC-01075) In the  antibiogram window  of the microbiology screen, when entering the same numeric value for two different formula types (e.g. MIC and E-test), the result was not always correctly saved. This ..."},"2940":{y:0,u:"../Content/db/reference_guide/bcg.htm",l:-1,t:"GLIMS reference guide - BillingCodeGroup",i:0.000156058966088092,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nBilling code group \nbcg \nglims \nyes \nyes \nNormal \nEach record represents a group of billing codes. \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser \nDescription ..."},"2941":{y:0,u:"../Content/db/reference_guide/rspd.htm",l:-1,t:"GLIMS reference guide - ResponsibilityDelegation",i:0.000117132847939567,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nResponsibility delegation \nrspd \nglims \nyes \nyes \nWith Delete Audit \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser \nEnd date \nDate when the delegation stops ..."},"2942":{y:0,u:"../Content/release_notes/990/GLIMS-10669.htm",l:-1,t:"Release notes 9.9.0 - Issue with synchronization of quick report and data sheet (GLIMS-10669)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Issue with synchronization of quick report and data sheet (GLIMS-10669) Issue An issue was reported where the Datasheet or Quick report window was not synchronized if opened from the Result overview and if another record was selected in the browser from which the Result ..."},"2943":{y:0,u:"../Content/release_notes/994/GLIMS_BAC-01661.htm",l:-1,t:"Release notes 9.9.4 - Execute \"When carrier data changes\" site function when grafting result changes (GLIMS_BAC-01661)",i:4.36103210702897E-05,a:"Release notes 9.9.4 -  Execute \"When carrier data changes\" site function when grafting result changes (GLIMS_BAC-01661) The site function that is specified in the When carrier data changes field of the  Medium  editor is now executed as well when the carrier\u0027s grafting result changes."},"2944":{y:0,u:"../Content/release_notes/990/GLIMS_BTM-01028.htm",l:-1,t:"Release notes 9.9.0 - Clear check out information when check out \n of blood bag is cancelled (GLIMS_BTM-01028)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Clear check out information when check out \n of blood bag is cancelled (GLIMS_BTM-01028) When a blood bag was selected and checked out for a patient but returned \n to the lab because it hasn\u0027t been used, the function  Cancel \n checkout  can be used. Using this function clears ..."},"2945":{y:0,u:"../Content/release_notes/990/MATE-05784.htm",l:-1,t:"Release notes 9.9.0 - Using ENTER in browser search field works again as expected (MATE-05784)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Using ENTER in browser search field works again as expected (MATE-05784) Context Some browsers, e.g. the Site functions browser, have a search field in the lower left corner to filter the records in the browser based on the words entered in the search field. Filtering will ..."},"2946":{y:0,u:"../Content/release_notes/990/MATE_RB-00151.htm",l:-1,t:"Release notes 9.9.0 - Strip ASCII codes incompatible with XML specification (MATE_RB-00151)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Strip ASCII codes incompatible with XML specification (MATE_RB-00151) An issue was reported where the XML output, generated for Report Builder, could contain ASCII characters that were not allowed by the XML 1.0 specification. This has been corrected."},"2947":{y:0,u:"../Content/release_notes/960/GLIMS_BILL-03177.htm",l:-1,t:"Release notes 9.6.0 - Improved logging when exporting financial data in the RIZIV format (GLIMS_BILL-03177)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Improved logging when exporting financial data in the RIZIV format (GLIMS_BILL-03177) When exporting financial data in the RIZIV format, it is possible to enable the field Full logging. When doing so, the logging did not always display clearly the invoice number, which could ..."},"2948":{y:0,u:"../Content/db/reference_guide/rgts.htm",l:-1,t:"GLIMS reference guide - CashRegisterSession",i:0.000112670150939289,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nCash register session \nrgts \nglims \nyes \nyes \nNormal \nThis table contains all known cash register sessions  \nFields \nActive user \nField indicates the user actually working with the cash register. Invariant  ..."},"2949":{y:0,u:"../Content/db/reference_guide/ml24.htm",l:-1,t:"GLIMS reference guide - SpcfcStCbtCrossBloodnvTxt",i:0.000106329601902493,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nCross match invalid text Text \nml24 \nglims \nno \nno \nNormal \nFields \nSpecific site \nSpecific site this is translation of Cross match invalid text Mandatory Invariant  SpecificSite CbtCrossBloodInvText \nId Mandatory ..."},"2950":{y:0,u:"../Content/release_notes/993/GLIMS-12412.htm",l:-1,t:"Release notes 9.9.3 - Reporting norms without limits not taken into account anymore for normal / abnormal results (GLIMS-12412)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Reporting norms without limits not taken into account anymore for normal / abnormal results (GLIMS-12412) The modification  GLIMS-11833  ensured that a result is no longer marked as abnormal if its value lies within the limits of the norm for reporting. However, this implied ..."},"2951":{y:0,u:"../Content/release_notes/990/MATE-06357.htm",l:-1,t:"Release notes 9.9.0 - Fixed display of menu accelerators in menu (MATE-06357)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Fixed display of menu accelerators in menu (MATE-06357) An issue was reported where the Windows accelerator specified for a  menu option  was not displayed correctly in the menu. For instance: \"CTRL-F11\" was displayed as \"Control + F1\". This issue has been corrected."},"2952":{y:0,u:"../Content/db/reference_guide/stationworklistversions.htm",l:-1,t:"GLIMS reference guide - StationWorklistVersions",i:8.61676425786336E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nLatest \nltst \n2 \nAll \nAll \nStation worklist versions \nFields Station . WorklistVersions Station . ReportWorklistVersions \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"2953":{y:0,u:"../Content/release_notes/930/GLIMS_EOS-00098.htm",l:-1,t:"Release notes 9.3.0 - Separate \"order activation\" from \"order \n entry\" options (GLIMS_EOS-00098)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Separate \"order activation\" from \"order \n entry\" options (GLIMS_EOS-00098) When  activating a pending \n order , some customers want to apply different default values/options \n than the ones used for regular order entry. To accomplish this, the existing \n order entry options ..."},"2954":{y:0,u:"../Content/db/reference_guide/lcsr.htm",l:-1,t:"GLIMS reference guide - LocusResult",i:0.000210074943359869,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nLocus result \nlcsr \nglims \nyes \nyes \nWith Delete Audit \nTable representing a test for a certain locus in an approach and its outcome \nFields \nApproach request \nApproach request through which the locus or variant was ..."},"2955":{y:0,u:"../Content/release_notes/960/MATE-04167.htm",l:-1,t:"Release notes 9.6.0 - Event detail window not synchronized correctly with Events browser (MATE-04167)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Event detail window not synchronized correctly with Events browser (MATE-04167) Problem description: Choose Start \u003e System management \u003e Events \u003e Event handlers \u003e By name, discriminator Select an Event handler and choose the context menu function Show all \u003e Events Select an ..."},"2956":{y:0,u:"../Content/db/reference_guide/inhr.htm",l:-1,t:"GLIMS reference guide - InheritancePattern",i:9.2402855166088E-05,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nInheritance pattern \ninhr \nglims \nyes \nyes \nWith Delete Audit \nInheritance patterns describe how a variant or disorder is transmitted in families. These patterns help to predict the recurrence risk for relatives. In ..."},"2957":{y:0,u:"../Content/release_notes/990/MATE-05652.htm",l:-1,t:"Release notes 9.9.0 - Fixed behaviour of Previous / Next in .NET browsers (MATE-05652)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Fixed behaviour of Previous / Next in .NET browsers (MATE-05652) Issue In previous GLIMS 9 versions, the Previous and Next ribbon items of the contextual  Tools  ribbon behaved differently in classic and .NET browsers: classic browsers: previous / next set of records (PageUp / ..."},"2958":{y:0,u:"../Content/release_notes/990/BILX_HL7DFT24-00005.htm",l:-1,t:"Release notes 9.9.0 - Financial export in HL7 DFT  format: allow sending credit notes (BILX_HL7DFT24-00005)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Financial export in HL7 DFT  format: allow sending credit notes (BILX_HL7DFT24-00005) The export of financial data in the HL7 DFT / HL7 DFT 2.4 format now allows the user to send financial shipments containing invoice summaries that contain credit notes  when the field Allow ..."},"2959":{y:0,u:"../Content/release_notes/930/GLIMS_SERO-00130.htm",l:-1,t:"Release notes 9.3.0 - Storage period of an archive part (GLIMS_SERO-00130)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Storage period of an archive part (GLIMS_SERO-00130) The Storage period is inherited from an Archive to its Archive parts and then to its Racks. As  archive parts  can be structured hierarchically, the storage period of an archive part should also be inherited from its parent ..."},"2960":{y:0,u:"../Content/release_notes/990/GLIMS-11991.htm",l:-1,t:"Release notes 9.9.0 - No more error when executing order review queries with Valab status \"To be evaluated\" (GLIMS-11991)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  No more error when executing order review queries with Valab status \"To be evaluated\" (GLIMS-11991) An error used to occur during the execution of the  order review query  when the search criterion Valab status  was set to To be evaluated. This has been corrected."},"2961":{y:0,u:"../Content/release_notes/980/GLIMS_BAC-01217.htm",l:-1,t:"Release notes 9.8.0 - Warning for not-reportable isolation when validating a microbiology action (GLIMS_BAC-01217)",i:8.06791229331134E-05,a:"Release notes 9.8.0 -  Warning for not-reportable isolation when validating a microbiology action (GLIMS_BAC-01217) Issue When validating a microbiology action to which at least one not-reportable isolation is linked, the following message was displayed: \"Warning: isolation is not-reportable yet. If ..."},"2962":{y:0,u:"../Content/release_notes/990/GLIMS_SERO-00165.htm",l:-1,t:"Release notes 9.9.0 - Correct execution of MISPL function .SetStorage on carriers (GLIMS_SERO-00165)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Correct execution of MISPL function .SetStorage on carriers (GLIMS_SERO-00165) In the following scenario, Creation of a Carrier-based MISPL function running  .SetStorage() , Execution of this function on a carrier, a message error, \"Rack and position must be empty in status To ..."},"2963":{y:0,u:"../Content/db/reference_guide/reportmedium.htm",l:-1,t:"GLIMS reference guide - ReportMedium",i:0.000113274020011179,a:"\nValue \nEnumerator \nAbbreviation \n1 \nCourier \nCourier \n2 \nFax \nFax \n3 \nPhone \nPhone \n4 \nModem \nModem \n5 \nE-mail \nE-mail \n6 \nCommunication \nCommunication \n7 \nFile \nFile \nFields Report . Medium DefaultReport . Medium \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"2964":{y:0,u:"../Content/db/reference_guide/bloodproductmodifier.htm",l:-1,t:"GLIMS reference guide - BloodProductModifier",i:8.72268479544016E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nNone \nNone \n2 \nFrozen \nFrzn \n3 \nUnfrozen \nUFzn \n4 \nDeglyceroled \nDGlc \n5 \nWashed \nWash \n6 \nPerifere \nPrfr \n7 \nUmbilical \nUblc \n8 \nFluid \nFld \nFields BloodProductSpecification . Modifier \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"2965":{y:0,u:"../Content/release_notes/990/GLIMS-10829.htm",l:-1,t:"Release notes 9.9.0 - Modification of internal logic for the Needs checking flag (GLIMS-10829)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Modification of internal logic for the Needs checking flag (GLIMS-10829) Due to an Oracle database locking issue, the internal logic for setting the Needs checking flag on reports has been changed. However, for end users, no change is detectable (the logic exposed to them ..."},"2966":{y:0,u:"../Content/release_notes/994/BILX_HL7DFT24-00009.htm",l:-1,t:"Release notes 9.9.4 - Financial export in HL7 2.4 format: number of sent billing items stored in Comment field (BILX_HL7DFT24-00009)",i:4.36103210702897E-05,a:"Release notes 9.9.4 -  Financial export in HL7 2.4 format: number of sent billing items stored in Comment field (BILX_HL7DFT24-00009) When having exported financial data in the HL7 2.4 format via the  Send function on Financial shipment  with the Mark option activated, shipment-related information ..."},"2967":{y:0,u:"../Content/db/reference_guide/logseverity.htm",l:-1,t:"GLIMS reference guide - LogSeverity",i:0.000124346077557068,a:"\nValue \nEnumerator \nAbbreviation \n1 \nInfo \nI \n2 \nWarning \nW \n3 \nError \nE \nFields lg_Entry . Severity \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"2968":{y:0,u:"../Content/db/reference_guide/mailpriority.htm",l:-1,t:"GLIMS reference guide - MailPriority",i:0.000180751059009918,a:"\nValue \nEnumerator \nAbbreviation \n1 \nLow \nLow \n2 \nNormal \nNormal \n3 \nHigh \nHigh \nFields gp_MailMessage . Priority \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"2969":{y:0,u:"../Content/general/status_actions.htm",l:-1,t:"Action states",i:0.000311539477017795,a:"Introduction to actions and action states Actions are the actual realizations of procedures. At order entry the \n scheduling takes place, which means that GLIMS is looking for an appropriate \n procedure to meet the requests. At that time, actions are created. An action can have several states: ..."},"2970":{y:0,u:"../Content/db/reference_guide/ml16.htm",l:-1,t:"GLIMS reference guide - IsolationAppraisalText",i:0.000103397675590807,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nText Text \nml16 \nglims \nno \nno \nNormal \nMultilingual text table for IsolationAppraisal.isap_Text \nFields \nId \nPrimary key. Automatically generated identifier whose value uniquely identifies each record. Mandatory Unique ..."},"2971":{y:0,u:"../Content/release_notes/990/GLIMS-11743.htm",l:-1,t:"Release notes 9.9.0 - Validation of the conclusion result in the order review program (GLIMS-11743)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Validation of the conclusion result in the order review program (GLIMS-11743) The  Order review  program allows you to indicate a Conclusion property in the  query options . If a Conclusion property is specified, an extra window will be integrated in the validation screen ..."},"2972":{y:0,u:"../Content/db/reference_guide/lstt.htm",l:-1,t:"GLIMS reference guide - ListType",i:0.000142014860838369,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nList type \nlstt \nglims \nyes \nyes \nWith Delete Audit \nRepresents a group of extra values for a specific content type. \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser ..."},"2973":{y:0,u:"../Content/db/reference_guide/hpbs.htm",l:-1,t:"GLIMS reference guide - hp_WebBrowserSection",i:0.000104724048907388,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nHome page web browser section \nhpbs \ngenrw \nyes \nyes \nNone \nThe specific settings of a home page web browser section \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser ..."},"2974":{y:0,u:"../Content/release_notes/990/GLIMS_ANLZ-01325.htm",l:-1,t:"Release notes 9.9.0 - Unknown station flag should  set result\u0027s station severity to ? instead of 0 (GLIMS_ANLZ-01325)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Unknown station flag should  set result\u0027s station severity to ? instead of 0 (GLIMS_ANLZ-01325) Upon receiving a result accompanied by a flag which was not configured as  Station flag  in GLIMS (while the station had other station flags configured in GLIMS), then the result\u0027s ..."},});