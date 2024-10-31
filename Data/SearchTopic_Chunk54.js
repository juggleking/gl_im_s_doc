define({"3483":{y:0,u:"../Content/release_notes/980/GLIMS-07844.htm",l:-1,t:"Release notes 9.8.0 - Executing department not taken into account in \"Incomplete results\" query (GLIMS-07844)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Executing department not taken into account in \"Incomplete results\" query (GLIMS-07844) An issue was reported where the parameters Executing department (group) were not taken into account when using the Incomplete results query. This has been corrected. Note Problem occurred ..."},"3484":{y:0,u:"../Content/release_notes/960/GLIMS-07669.htm",l:-1,t:"Release notes 9.6.0 - Patient selection based on Birth date in Order consultation (GLIMS-07669)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Patient selection based on Birth date in Order consultation (GLIMS-07669) In  Order consultation  a patient can now also be selected based on its Birth date."},"3485":{y:0,u:"../Content/db/reference_guide/cleanorcreditbrowseoptions.htm",l:-1,t:"GLIMS reference guide - CleanOrCreditBrowseOptions",i:9.58260746564052E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nOrders \nord \n2 \nOrder sets \nos \nFields \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3486":{y:0,u:"../Content/release_notes/990/GLIMS_ANLZ-01351.htm",l:-1,t:"Release notes 9.9.0 - Correction for crash of translator service (GLIMS_ANLZ-01351)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Correction for crash of translator service (GLIMS_ANLZ-01351) In very rare cases, it could happen that the ASTM-server encounters more than one historical result in memory when constructing a work order message reply. When this happens, GLIMS will try to log this situation to ..."},"3487":{y:0,u:"../Content/release_notes/993/GLIMS-12114.htm",l:-1,t:"Release notes 9.9.3 - Disabled assessment methods shall have no effect on the station\u0027s LAS status colour display (GLIMS-12114)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Disabled assessment methods shall have no effect on the station\u0027s LAS status colour display (GLIMS-12114) Context Since  GLIMS 9.8.0 , the LAS status in the Station and Assessment method browsers is displayed on a coloured background. Issue For stations, the LAS status ..."},"3488":{y:0,u:"../Content/release_notes/990/GLIMS-10484.htm",l:-1,t:"Release notes 9.9.0 - Enhancements for the definition of person relations (GLIMS-10484)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Enhancements for the definition of person relations (GLIMS-10484) The definition of  person relations  has been improved  since it was possible to define a Person as her own  mother  or one of her children as her mother for instance. This kind of incorrect person relations is ..."},"3489":{y:0,u:"../Content/release_notes/996/GLIMS-13207.htm",l:-1,t:"Release notes 9.9.6 - Fixed slow performance of microbiology action browser (GLIMS-13207)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  Fixed slow performance of microbiology action browser (GLIMS-13207) The microbiology action browser performed slowly when a material had been specified as query option. This issue, which occurred since GLIMS 9.8, has been corrected and the performance is now better."},"3490":{y:0,u:"../Content/release_notes/990/GLIMS_QC-00839.htm",l:-1,t:"Release notes 9.9.0 - Value entered as QC severity for non-numeric results cannot be higher than 999 (GLIMS_QC-00839)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Value entered as QC severity for non-numeric results cannot be higher than 999 (GLIMS_QC-00839) The value entered as  QC severity for non-numeric results  can no longer exceed 999."},"3491":{y:0,u:"../Content/release_notes/990/GLIMS-11564.htm",l:-1,t:"Release notes 9.9.0 - Order.Attribute(\"NewOrderEntryRequests\") should return reused specimens (GLIMS-11564)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Order.Attribute(\"NewOrderEntryRequests\") should return reused specimens (GLIMS-11564) The MISPL function  Order.Attribute(\"NewOrderEntryRequests\")  did not return reused specimens. This issue, which occurred since GLIMS 9.8, has been corrected."},"3492":{y:0,u:"../Content/release_notes/930/GLIMS_ISTO-00015.htm",l:-1,t:"Release notes 9.3.0 - Archive information in isolation editor (GLIMS_ISTO-00015)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Archive information in isolation editor (GLIMS_ISTO-00015) The Archiving page of the Isolation editor has been improved: The Position column has been removed. Information that does not relate to the isolation is no longer shown (e.g. specimen, carrier)."},"3493":{y:0,u:"../Content/release_notes/995/GLIMS_GENX_LAB-00504.htm",l:-1,t:"Release notes 9.9.5 - Add stop position to Sequence variant editor (GLIMS_GENX_LAB-00504)",i:4.36103210702897E-05,a:"Release notes 9.9.5 -  Add stop position to Sequence variant editor (GLIMS_GENX_LAB-00504) Updated functionality From now on, the  sequence variant editor  will contain a Stop position field in the same way as it is presented in the CNV editor. The new Stop position field will work in a similar ..."},"3494":{y:0,u:"../Content/modules/blood_transfusion/configuration/patient_blood_group/mispl_examples/bgrhesus.htm",l:-1,t:"BGRhesus as Procedure output of BGPP",i:5.9342087249369E-05,a:"BGRhesus as Procedure output\nof BGPP MISPL procedure output(BGRhesus) property value : /* Name     : combinebgrh.prco */\n/* What     : combination of single bg and rh towards final result blgrh */\n/* Basetable: action */ string bgrhcurrent, bgrhprevious, result; bgrhcurrent := BG + Rhesus ; ..."},"3495":{y:0,u:"../Content/release_notes/960/BILX_GKVDT-00061.htm",l:-1,t:"Release notes 9.6.0 - Financial export in \"German KVDT\" format (BILX_GKVDT-00061)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Financial export in \"German KVDT\" format (BILX_GKVDT-00061) When exporting financial data in the German KVDT format using the  FinancialShipment.Send  function, GLIMS offers a more flexible method to look up the billing item executor for export. See  BILX_GKVDT-00031  for more ..."},"3496":{y:0,u:"../Content/db/reference_guide/wors.htm",l:-1,t:"GLIMS reference guide - w_WorkOrderResult",i:9.57245636949082E-05,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nWork order result \nwors \nN.A. \nno \nno \nNone \nWork order results \nFields \nAction \nAction Action Action \nOrder \nActual order Mandatory  Order Order \nResult \nActual result Mandatory  Result Result \nSeq no \nSequence number ..."},"3497":{y:0,u:"../Content/release_notes/994/GLIMS_BTM-01101.htm",l:-1,t:"Release notes 9.9.4 - Blood attribute \"Hemolysin\" was not added during blood bag import in Progesa format (GLIMS_BTM-01101)",i:4.36103210702897E-05,a:"Release notes 9.9.4 -  Blood attribute \"Hemolysin\" was not added during blood bag import in Progesa format (GLIMS_BTM-01101) When importing blood bags using the Progesa format, the Hemolysin blood attribute information, even though displayed correctly in the browser containing the imported blood bag ..."},"3498":{y:0,u:"../Content/release_notes/995/GLIMS-12883.htm",l:-1,t:"Release notes 9.9.5 - Do not regenerate reports after severity/norm update for validated results (GLIMS-12883)",i:4.36103210702897E-05,a:"Release notes 9.9.5 -  Do not regenerate reports after severity/norm update for validated results (GLIMS-12883) An issue was reported where updating the severity or norm of a result validated more than a day ago triggered the regeneration of (old) reports. This issue, which occurred since GLIMS 9.8, ..."},"3499":{y:0,u:"../Content/release_notes/960/GLIMS_BTM-00856.htm",l:-1,t:"Release notes 9.6.0 - Specify hospital employee during check out of blood bag (GLIMS_BTM-00856)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Specify hospital employee during check out of blood bag (GLIMS_BTM-00856) Introduction When a blood bag is checked out in GLIMS because it is needed for a patient, it is picked up by a hospital employee. This hospital employee can now be specified during check out. New field ..."},"3500":{y:0,u:"../Content/release_notes/990/GLIMS_BTM-01017.htm",l:-1,t:"Release notes 9.9.0 - Blood bag import: reading of D antigen information from Progesa file (GLIMS_BTM-01017)",i:8.06791229331134E-05,a:"Release notes 9.9.0 -  Blood bag import: reading of D antigen information from Progesa file (GLIMS_BTM-01017) When  importing blood bags  using the Progesa format, the field containing the antigen information D-/D+ was not read. This has been corrected: the D antigen information provided in the ..."},"3501":{y:0,u:"../Content/release_notes/980/GLIMS-07849.htm",l:-1,t:"Release notes 9.8.0 - Correction for result import program (GLIMS-07849)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Correction for result import program (GLIMS-07849) Problem description In certain cases, the GLIMS session was ended when importing results via the result import program (Start \u003e System management \u003e Database \u003e Specific import \u003e Results).  This happened e.g. when the error ..."},"3502":{y:0,u:"../Content/release_notes/950/MATE-03695.htm",l:-1,t:"Release notes 9.5.0 - Issue with sending emails from within GLIMS (MATE-03695)",i:4.36103210702897E-05,a:"Release notes 9.5.0 -  Issue with sending emails from within GLIMS (MATE-03695) An issue was detected when trying to send external emails from within GLIMS. This has been corrected."},"3503":{y:0,u:"../Content/db/reference_guide/dontcareyesno.htm",l:-1,t:"GLIMS reference guide - DontCareYesNo",i:8.70790787309682E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nDon\u0027t care \nDon\u0027t care \n2 \nYes \nYes \n3 \nNo \nNo \nFields \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3504":{y:0,u:"../Content/release_notes/996/GLIMS-13475.htm",l:-1,t:"Release notes 9.9.6 - When activating multiple pending orders, apply the indicated object time to all orders to be activated (GLIMS-13475)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  When activating multiple pending orders, apply the indicated object time to all orders to be activated (GLIMS-13475) When activating multiple pending orders and setting the proposed object date/time to another value in the  activation screen , the  indicated object date/time ..."},"3505":{y:0,u:"../Content/release_notes/994/GLIMS-12725.htm",l:-1,t:"Release notes 9.9.4 - Request definition browser did not show updated  description of panel request definition (GLIMS-12725)",i:4.36103210702897E-05,a:"Release notes 9.9.4 -  Request definition browser did not show updated  description of panel request definition (GLIMS-12725) When the Description of a panel request definition was updated in the Request definition editor that had been opened from the request definition browser, the latter did not ..."},"3506":{y:0,u:"../Content/db/reference_guide/channelquality.htm",l:-1,t:"GLIMS reference guide - ChannelQuality",i:9.07554376640207E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nUnreliable \nUnr \n2 \nDubious \nDub \n3 \nReliable \nRel \nFields Result . ChannelQuality AssessmentMethod . Quality \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3507":{y:0,u:"../Content/release_notes/930/GLIMS_OI-00491.htm",l:-1,t:"Release notes 9.3.0 - Too many events in IHE order communication (GLIMS_OI-00491)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Too many events in IHE order communication (GLIMS_OI-00491) An event type RequestGroup with sub type LabInitiated,StatusNotification was incorrectly created when LAB1(OP+ORT) / LAB-3 (OP+ORT) was selected in the IHE LTW context (Start -\u003e System management -\u003e Customize -\u003e ..."},"3508":{y:0,u:"../Content/release_notes/991/GLIMS-11569.htm",l:-1,t:"Release notes 9.9.1 - Ensure backward compatibility of request form functionality (GLIMS-11569)",i:5.59665883578976E-05,a:"Release notes 9.9.1 -  Ensure backward compatibility of request form functionality (GLIMS-11569) Issue In GLIMS 9.8, the behaviour of the  Request form  during order entry was changed which resulted in backward incompatible behaviour in the following scenarios. Scenario A Request properties by ..."},"3509":{y:0,u:"../Content/release_notes/980/GLIMS-08184.htm",l:-1,t:"Release notes 9.8.0 - Show address of issuer in info window of order entry screen (GLIMS-08184)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Show address of issuer in info window of order entry screen (GLIMS-08184) Problem description It is possible that a municipality is inhabited by several issuers with the same name. When the order is completed, the user needs to check if the correct issuer is selected. However, ..."},"3510":{y:0,u:"../Content/release_notes/980/GLIMS-08022.htm",l:-1,t:"Release notes 9.8.0 - Correction for phone status of results marked as not to be phoned (GLIMS-08022)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Correction for phone status of results marked as not to be phoned (GLIMS-08022) An issue was reported where the Phone status of results which were manually marked as not to be phoned, was reset to Yes when a new request was added to the order. This has been corrected. Note ..."},"3511":{y:0,u:"../Content/release_notes/997/MATE-07213.htm",l:-1,t:"Release notes 9.9.7 - Upgraded Mips.TelerikControls to v1.3.0 + Telerik controls to v2021.2.615.40 (MATE-07213)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Upgraded Mips.TelerikControls to v1.3.0 + Telerik controls to v2021.2.615.40 (MATE-07213) This modification upgrades Mips.TelerikControls to v1.3.0 Telerik controls to v2021.2.615.40 to fix several issues. Mips.TelerikControls provides among others a  Rich text editor  based ..."},"3512":{y:0,u:"../Content/db/reference_guide/hab.htm",l:-1,t:"GLIMS reference guide - HLAAntibody",i:0.000104256929168745,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nHLA-antibody \nhab \nglims \nyes \nyes \nNormal \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser \nDescription String Description \nId \nPrimary key. Automatically generated ..."},"3513":{y:0,u:"../Content/db/reference_guide/bgag.htm",l:-1,t:"GLIMS reference guide - BloodBagAntigen",i:0.000114493737663194,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nBlood bag antigen \nbgag \nglims \nyes \nyes \nNormal \nFields \nAntigen \nThis field contains the antigen identification. Mandatory  Antigen Antigen \nAntigen presence \nIf the toggle box is set, the referred antigen is present. ..."},"3514":{y:0,u:"../Content/release_notes/980/GLIMS_QCMB-00035.htm",l:-1,t:"Release notes 9.8.0 - Scheduling of microbiology QC tests for inactive and expired lots (GLIMS_QCMB-00035)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Scheduling of microbiology QC tests for inactive and expired lots (GLIMS_QCMB-00035) Past functionality When  microbiology QC tests  are  scheduled ,  microbiology QC results  are created for each  microbiology reagent lot  of the  microbiology reagent  used to perform the ..."},"3515":{y:0,u:"../Content/release_notes/980/MATE-04614.htm",l:-1,t:"Release notes 9.8.0 - Correction for browser styling (MATE-04614)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Correction for browser styling (MATE-04614) An issue was reported in redesigned (.Net) browsers where the \n\t\tfunctionality to  style  the rows via a site function accidentally swapped \n\t\tbackground and foreground color on screen. This has been corrected."},"3516":{y:0,u:"../Content/release_notes/980/GLIMS-08393.htm",l:-1,t:"Release notes 9.8.0 - No deadlocks anymore when setting \"Needs checking\" flag  (GLIMS-08393)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  No deadlocks anymore when setting \"Needs checking\" flag  (GLIMS-08393) The Needs checking option  indicates whether a report should be evaluated during report generation. A deadlock sometimes occurred on the Oracle database when a report’s Needs Checking flag was set. This ..."},"3517":{y:0,u:"../Content/release_notes/930/GLIMS_EOS-00089.htm",l:-1,t:"Release notes 9.3.0 - Check issuer validity when activating pending \n order (GLIMS_EOS-00089)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Check issuer validity when activating pending \n order (GLIMS_EOS-00089) When manually  activating \n a pending order , GLIMS will now check if the order\u0027s issuer is still \n valid (\"active until\" date of the correspondent has not elapsed). \n  If not, GLIMS will show a warning ..."},"3518":{y:0,u:"../Content/db/reference_guide/trend.htm",l:-1,t:"GLIMS reference guide - Trend",i:9.02471061922373E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nConstant \nConstant \n2 \nRising \nRising \n3 \nFalling \nFalling \nFields TrendCheck . CurrentTrend \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3519":{y:0,u:"../Content/release_notes/990/GLIMS-11250.htm",l:-1,t:"Release notes 9.9.0 - Improved performance for the creation of orders with many requests (GLIMS-11250)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Improved performance for the creation of orders with many requests (GLIMS-11250) Since GLIMS 9.3, the creation of orders containing more than 100 requests lasted too long. Moreover an increase of the number of requests slowed down the creation process more than linearly. This ..."},"3520":{y:0,u:"../Content/release_notes/990/GLIMS-10719.htm",l:-1,t:"Release notes 9.9.0 - Object time of sampling actions and subspecimens is updated when order object time changes (GLIMS-10719)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Object time of sampling actions and subspecimens is updated when order object time changes (GLIMS-10719) Since GLIMS 9.6.0, when the object time of an order was  modified , the object time of the sampling actions (i.e actions derived from a procedure having a material output ..."},"3521":{y:0,u:"../Content/release_notes/997/GLIMS_ARep-00337.htm",l:-1,t:"Release notes 9.9.7 - Update Jasper example template to make use of the HTML component (GLIMS_ARep-00337)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Update Jasper example template to make use of the HTML component (GLIMS_ARep-00337) MATE_JRBS-00112  extended the MIPS Report Builder library with a set of classes to render rich texts in HTML format on reports. This modification, GLIMS_ARep-00337, updates the ..."},"3522":{y:0,u:"../Content/db/reference_guide/mm11.htm",l:-1,t:"GLIMS reference guide - sc_PrivilegeLabel",i:0.00010395105295334,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nLabel Text \nmm11 \ngenrw \nno \nno \nNormal \nFields \nId Mandatory Unique Automatic PositiveInteger Id \nPrivilege \nPrivilege this is translation of Label Mandatory Invariant  sc_Privilege Label \nLanguage \nLanguage of ..."},"3523":{y:0,u:"../Content/db/reference_guide/mdm.htm",l:-1,t:"GLIMS reference guide - Medium",i:0.000291702055230033,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nMedium \nmdm \nglims \nyes \nyes \nNormal \nThis table stores media which are used for microbiology cultures. \nFields \nChoice list allowed values \nOptional choice list for the values of medium ChoiceList ChoiceList \nCreation ..."},"3524":{y:0,u:"../Content/db/reference_guide/sbcn.htm",l:-1,t:"GLIMS reference guide - w_SubContractContext",i:0.00022864481992665,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nSub contract context \nsbcn \nN.A. \nno \nno \nNone \nSub contracting context \nFields \nId \nPrimary key. Automatically generated identifier whose value uniquely identifies each record. Mandatory Unique Automatic ..."},"3525":{y:0,u:"../Content/release_notes/994/GLIMS-12875.htm",l:-1,t:"Release notes 9.9.4 - Ensure correct property output evaluation upon specimen confirmation (GLIMS-12875)",i:4.36103210702897E-05,a:"Release notes 9.9.4 -  Ensure correct property output evaluation upon specimen confirmation (GLIMS-12875) When the property outputs of a child specimen both have a trigger that updates the specimen (example: .SetStorage, .SetMeasuredSize, .SetReplacementLevel), an error occurred upon confirmation of ..."},"3526":{y:0,u:"../Content/release_notes/997/GLIMS_BAC-01803.htm",l:-1,t:"Release notes 9.9.7 - Show all 15 characters of antibiotic result mnemonic in antibiogram browsers in MB work screen (GLIMS_BAC-01803)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Show all 15 characters of antibiotic result mnemonic in antibiogram browsers in MB work screen (GLIMS_BAC-01803) Only 12 characters of a 15-character mnemonic were shown in the  antibiogram browser  and the  zoomed antibiogram screen  in the  MB work screen . This issue, which ..."},"3527":{y:0,u:"../Content/db/reference_guide/residencetype.htm",l:-1,t:"GLIMS reference guide - ResidenceType",i:0.000167027541439586,a:"\nValue \nEnumerator \nAbbreviation \n1 \nHospitalized \nH \n2 \nAmbulatory \nA \nFields EncounterType . ResidenceType PolicyClause . ResidenceType \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3528":{y:0,u:"../Content/release_notes/990/GLIMS-11712.htm",l:-1,t:"Release notes 9.9.0 - Correction of error in case of recursion in procedure definition (GLIMS-11712)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Correction of error in case of recursion in procedure definition (GLIMS-11712) In the presence of a recursion in the defined procedures (e.g. A is both input of procedure P and output of procedure Q and B is both input of procedure Q and output of procedure P), the action ..."},"3529":{y:0,u:"../Content/release_notes/940/MATE-03453.htm",l:-1,t:"Release notes 9.4.0 - Issue in audit overview screen (MATE-03453)",i:4.36103210702897E-05,a:"Release notes 9.4.0 -  Issue in audit overview screen (MATE-03453) An error could occur when enabling the Group by record option in the Audit overview screen (Start -\u003e System management -\u003e Logging -\u003e Audit overview). This has been corrected."},"3530":{y:0,u:"../Content/db/reference_guide/reportdestination.htm",l:-1,t:"GLIMS reference guide - ReportDestination",i:9.46258755391735E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nDirectory \nDirectory \n2 \nMedibridge \nMedibridge \n3 \nFloppy \nFloppy \n4 \nPrinter \nPrinter \n5 \nHector \nHector \nFields \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3531":{y:0,u:"../Content/release_notes/990/GLIMS_PI-00349.htm",l:-1,t:"Release notes 9.9.0 - Electronic orders: find received country code in coding system configuration (GLIMS_PI-00349)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Electronic orders: find received country code in coding system configuration (GLIMS_PI-00349) If an electronic order message contains a country code that is not matched by any Country defined in GLIMS, GLIMS will now try to find the received code by going through the code sets ..."},"3532":{y:0,u:"../Content/release_notes/990/BILX_HPRIMXML-00046.htm",l:-1,t:"Release notes 9.9.0 - Financial export in \"HPRIM XML 1.04\" format (BILX_HPRIMXML-00046)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Financial export in \"HPRIM XML 1.04\" format (BILX_HPRIMXML-00046) Issue Since the introduction of  HPRIM XML 1.07 , it was no longer possible to  send financial shipments  in the HPRIM XML 1.04 format. Solution This has been corrected: the HPRIM XML 1.04 format is now ..."},"3533":{y:0,u:"../Content/release_notes/996/MATE-07034.htm",l:-1,t:"Release notes 9.9.6 - CTRL+F should not take into account spaces at the end of the search text (MATE-07034)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  CTRL+F should not take into account spaces at the end of the search text (MATE-07034) When using CTRL+F to find data in a browser, spaces at the end of the search text were taken into account as well whereas in GLIMS 8 those spaces were not taken into account. Consequently, ..."},"3534":{y:0,u:"../Content/release_notes/990/GLIMS_BAC-01561.htm",l:-1,t:"Release notes 9.9.0 - Microbiology work screen now shows relationships between carriers (GLIMS_BAC-01561)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Microbiology work screen now shows relationships between carriers (GLIMS_BAC-01561) An issue was reported where there was no way to visually see if carriers were related in the  microbiology work screen .  This issue has been corrected. From now on, every subcarrier will be ..."},"3535":{y:0,u:"../Content/release_notes/930/MATE_LDAP-00002.htm",l:-1,t:"Release notes 9.3.0 - Conversion of site attributes for LDAP authentication (MATE_LDAP-00002)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Conversion of site attributes for LDAP authentication (MATE_LDAP-00002) The site attributes used for  LDAP authentication  have been converted to real database fields in the general options (Start -\u003e System management -\u003e Customize -\u003e MATE).  Other changes The possible values ..."},"3536":{y:0,u:"../Content/release_notes/930/MATE-02906.htm",l:-1,t:"Release notes 9.3.0 - Host-restricted monitoring of services/translators (MATE-02906)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Host-restricted monitoring of services/translators (MATE-02906) GLIMS offers a tool \" MonitorServices \" to automatically restart services and translators for which \"autostart\" is turned on, but which aren\u0027t running at the moment of checking. However, in larger environments, ..."},"3537":{y:0,u:"../Content/db/reference_guide/qccheckapplication.htm",l:-1,t:"GLIMS reference guide - QCCheckApplication",i:9.0406209932828E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nQCToday \nQctd \n2 \nOther \nOthr \nFields SpecificSite . QCCheckApplication \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3538":{y:0,u:"../Content/release_notes/996/GLIMS_TRIX_NL-00003.htm",l:-1,t:"Release notes 9.9.6 - Support for Trix version 3.0 (GLIMS_TRIX_NL-00003)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  Support for Trix version 3.0 (GLIMS_TRIX_NL-00003) Introduction GLIMS now supports version 3.0 of the  TRIX interface . This implies that the connection to the web service is now a direct one and no longer established via a translator.  Older versions of the Trix interface ..."},"3539":{y:0,u:"../Content/release_notes/990/MATE-05810.htm",l:-1,t:"Release notes 9.9.0 - Icon in column header of browser now moves along when resizing (MATE-05810)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Icon in column header of browser now moves along when resizing (MATE-05810) A button or icon which was positioned in the column header (label) of a browser (e.g. order review) did not move along when the column was resized or repositioned.   This has been corrected."},"3540":{y:0,u:"../Content/release_notes/990/GLIMS_ANLZ-01381.htm",l:-1,t:"Release notes 9.9.0 - Option to clear the download status of all specimen actions when Specimen.SamplingTime is updated (GLIMS_ANLZ-01381)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Option to clear the download status of all specimen actions when Specimen.SamplingTime is updated (GLIMS_ANLZ-01381) Issue When a station was working in  download mode  (ALL query), the action/specimen was forwarded as soon as the action was known in GLIMS based on the ..."},"3541":{y:0,u:"../Content/release_notes/990/GLIMS-11116.htm",l:-1,t:"Release notes 9.9.0 - Double requests: BudgetCharge present in internal report URL message (GLIMS-11116)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Double requests: BudgetCharge present in internal report URL message (GLIMS-11116) Background When a property is requested via more than one  RequestedCode , several requests are created for the same result. However, upon report generation and order budgetting/tariffication, ..."},"3542":{y:0,u:"../Content/release_notes/995/GLIMS_GENX_LAB-00617.htm",l:-1,t:"Release notes 9.9.5 - Genetic exam: Sub-specimen not correctly added in a specific scenario (GLIMS_GENX_LAB-00617)",i:4.36103210702897E-05,a:"Release notes 9.9.5 -  Genetic exam: Sub-specimen not correctly added in a specific scenario (GLIMS_GENX_LAB-00617) An issue was detected in the genetic exam screen, where in certain scenarios the parent specimen of a sub-specimen was missing, or where a sub-specimen was wrongly added to the genetic ..."},"3543":{y:0,u:"../Content/release_notes/991/GLIMS-12094.htm",l:-1,t:"Release notes 9.9.1 - Improved performance of Orders by receipt time browser if an Internal id prefix is used (GLIMS-12094)",i:4.36103210702897E-05,a:"Release notes 9.9.1 -  Improved performance of Orders by receipt time browser if an Internal id prefix is used (GLIMS-12094) An issue was reported where  the Orders by receipt time browser was very slow if an Internal id prefix was specified in the query options. The performance has been improved."},"3544":{y:0,u:"../Content/release_notes/995/MATE-06895.htm",l:-1,t:"Release notes 9.9.5 - Character limit increased from 188 to 1970 for statistics output (MATE-06895)",i:4.36103210702897E-05,a:"Release notes 9.9.5 -  Character limit increased from 188 to 1970 for statistics output (MATE-06895) The thechnical limit of 188 characters imposed by OpenEdge caused certain output (especially in the  Statistics  module where it limited the length of the string returned by the user-defined MISPL ..."},"3545":{y:0,u:"../Content/release_notes/960/GLIMS_BAC-01099.htm",l:-1,t:"Release notes 9.6.0 - Correction for position of cursor in microbiology screen (GLIMS_BAC-01099)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Correction for position of cursor in microbiology screen (GLIMS_BAC-01099) When entering a conclusion for a microbiology action with status ReadValidated, the microbiology action\u0027s status changes, causing the microbiology screen to refresh. However, when the focus returned to ..."},});