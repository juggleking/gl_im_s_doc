define({"3861":{y:0,u:"../Content/release_notes/990/MATE-06300.htm",l:-1,t:"Release notes 9.9.0 - Correction for purging events  (MATE-06300)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Correction for purging events  (MATE-06300) An issue was identified where the Purge function on an Event handler used an illogical calculation of the \u0027cut-off\u0027 timestamp, as it only applied the day but not the time portion - effectively cutting off at midnight rather than ..."},"3862":{y:0,u:"../Content/release_notes/930/GLIMS-06241.htm",l:-1,t:"Release notes 9.3.0 - New method Order.AddMediumReport\n (GLIMS-06241)",i:8.06791229331134E-05,a:"Release notes 9.3.0 -  New method Order.AddMediumReport\n (GLIMS-06241) Introduction GLIMS offers several ways to add a report for an existing order in addition to the reports that were originally scheduled during order entry. New function Order.AddMediumReport A new function  Order.AddMediumReport  ..."},"3863":{y:0,u:"../Content/release_notes/990/GLIMS-11618.htm",l:-1,t:"Release notes 9.9.0 - No more error when creating transfusion forms if the user data of a result is inconsistent (GLIMS-11618)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  No more error when creating transfusion forms if the user data of a result is inconsistent (GLIMS-11618) When using the contextual menu/ribbon item  Print transfusion form , an error message was displayed if the blood product result fields Validated by, Confirmed by and ..."},"3864":{y:0,u:"../Content/release_notes/960/MATE_COMHL-00318.htm",l:-1,t:"Release notes 9.6.0 - Watchdog uses $DLC/jre instead of $APPL/java  (MATE_COMHL-00318)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Watchdog uses $DLC/jre instead of $APPL/java  (MATE_COMHL-00318) In previous versions of the application, Watchdog required: on Windows, that a separate installation of Java Runtime Edition 1.5 was placed in directory $APPL\\java on UNIX, that the default java version was at ..."},"3865":{y:0,u:"../Content/release_notes/960/BILX_GKVDT-00082.htm",l:-1,t:"Release notes 9.6.0 - Financial export in KVDT format: BSNR (BILX_GKVDT-00082)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Financial export in KVDT format: BSNR (BILX_GKVDT-00082) The export of financial data in the German KVDT format (using the  FinancialShipment.Send  function) has been updated to now export the identification code of the BillingItem.ExecutingDepartment (and no longer the ..."},"3866":{y:0,u:"../Content/release_notes/950/BILX_CARE-00008.htm",l:-1,t:"Release notes 9.5.0 - Financial export in \"RIZIV/MyCareNet\" format (BILX_CARE-00008)",i:4.36103210702897E-05,a:"Release notes 9.5.0 -  Financial export in \"RIZIV/MyCareNet\" format (BILX_CARE-00008) When exporting financial data in the RIZIV or MyCareNet format, GLIMS now allows to include a Single Point of Contact for some funds. Note As this is currently only supported by the Christelijke Mutualiteiten, only ..."},"3867":{y:0,u:"../Content/release_notes/990/MATE-05744.htm",l:-1,t:"Release notes 9.9.0 - Revised refreshing of browsers after a record is updated (MATE-05744)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Revised refreshing of browsers after a record is updated (MATE-05744) Redesigned .NET  browsers  that offer a query options screen will now no longer reopen the query to refresh the data after one or more records were updated or processed by a function. A specific row refresh ..."},"3868":{y:0,u:"../Content/release_notes/990/GLIMS_BTM-01048.htm",l:-1,t:"Release notes 9.9.0 - Scanning a blood bag typing barcode resulted in an invalid error message (GLIMS_BTM-01048)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Scanning a blood bag typing barcode resulted in an invalid error message (GLIMS_BTM-01048) GLIMS features a  blood bag scan program  in the blood transfusion module to register blood bags into the system. The following issue was detected: scanning a correct barcode for an ..."},"3869":{y:0,u:"../Content/release_notes/930/GLIMS-05885.htm",l:-1,t:"Release notes 9.3.0 - Format of mean value in \"Result.SelectValue\" \n function (GLIMS-05885)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Format of mean value in \"Result.SelectValue\" \n function (GLIMS-05885) The  \"Select \n value\" function for Results  allows selecting several previous \n results in which case the mean value of these results will be stored as \n final result. However, the format of the mean value ..."},"3870":{y:0,u:"../Content/release_notes/990/GLIMS-11294.htm",l:-1,t:"Release notes 9.9.0 - Animal browser should filter on object template during order entry (GLIMS-11294)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Animal browser should filter on object template during order entry (GLIMS-11294) The  object template  specified during order entry was not taken into account by the lookup browser that can be opened from the order entry screen to select an animal. Consequently, all animals ..."},"3871":{y:0,u:"../Content/communication/direct/Reporting/hl7/segments/hl7msh.html",l:-1,t:"HL7 MSH segment",i:0.000372012815728889,a:"HL7: MSH - message header segment 3. Sending Application Export: expansion of the environment variable MA_NAME  Import: Filled by sender 4. Sending Facility Export: Translator name Import: Filled by sender 5. Receiving Application Export: the Receiver Internal Id if the Receiver \n is specified in ..."},"3872":{y:0,u:"../Content/db/reference_guide/cnss.htm",l:-1,t:"GLIMS reference guide - ConsultStatus",i:0.00011176381742838,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nConsult status \ncnss \nglims \nyes \nyes \nNormal \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic  sc_User CreationUser \nDescription String Description \nId Mandatory Unique Automatic ..."},"3873":{y:0,u:"../Content/db/reference_guide/internallanguage.htm",l:-1,t:"GLIMS reference guide - InternalLanguage",i:0.00013372164052959,a:"\nValue \nEnumerator \nAbbreviation \n1 \nURL \nURL \n2 \nXML \nXML \nFields gp_Service . InternalLanguage gp_Translator . InternalLanguage gp_QueueProcessor . InternalLanguage \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3874":{y:0,u:"../Content/release_notes/990/GLIMS_BILL-03694.htm",l:-1,t:"Release notes 9.9.0 - Fixed missing budget item for panels in URL of LDT reports (GLIMS_BILL-03694)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Fixed missing budget item for panels in URL of LDT reports (GLIMS_BILL-03694) Issue The URL of the LDT report did not reference the  budget item in case of a panel (the  request definition  of which had the option Charge set to Panel only) with more than one panel member, one ..."},"3875":{y:0,u:"../Content/release_notes/980/GLIMS_BAM-00105.htm",l:-1,t:"Release notes 9.8.0 - Improvement of data load performance (GLIMS_BAM-00105)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Improvement of data load performance (GLIMS_BAM-00105) Issue In labs using a Progress database and where more than 10 000 results are obtained every day, data loading in the  Business Activity Monitor  was slow.  Solution The Actions by download status bar has been removed ..."},"3876":{y:0,u:"../Content/db/reference_guide/resultaction.htm",l:-1,t:"GLIMS reference guide - ResultAction",i:8.89836073333488E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nNone \n2 \nConfirm \nCnf \n3 \nValidate \nVal \n4 \nRepeat \nRpt \n5 \nDilute \nDlt \n6 \nDiscontinue \nDsc \nFields ResultCode . Action \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3877":{y:0,u:"../Content/db/reference_guide/ffp.htm",l:-1,t:"GLIMS reference guide - rt_FormalFunctionParameter",i:0.000128576339807829,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nFormal function parameter \nffp \ngenro \nno \nno \nNone \nFormal function parameters for batch execution \nFields \nData type \nThe datatype for this parameter Mandatory  DataType DataType \nOne of: Logical, Integer, Positive ..."},"3878":{y:0,u:"../Content/db/reference_guide/genomicbuild.htm",l:-1,t:"GLIMS reference guide - GenomicBuild",i:8.76288286611917E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nGRCh38 \nGRCh38 \n2 \nGRCh37 \nGRCh37 \n3 \nHG19 \nHG19 \nFields Variant . GenomeBuild \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3879":{y:0,u:"../Content/release_notes/980/GLIMS-07521.htm",l:-1,t:"Release notes 9.8.0 - Performance of urgency monitor (Oracle databases only) (GLIMS-07521)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Performance of urgency monitor (Oracle databases only) (GLIMS-07521) For GLIMS in combination with an Oracle database, the performance of the  urgency monitor  has been improved when only using the Executing department group and Classification as query parameters."},"3880":{y:0,u:"../Content/release_notes/960/GLIMS_BAC-01115.htm",l:-1,t:"Release notes 9.6.0 - Adding carriers automatically with MISPL functions (GLIMS_BAC-01115)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Adding carriers automatically with MISPL functions (GLIMS_BAC-01115) MISPL functions \u0027.AddCarriers\u0027  Carriers can now be requested automatically using two new MISPL functions: MicrobiologyAction.AddCarriers Specimen.AddCarriers Use case  of MicrobiologyAction.AddCarriers When ..."},"3881":{y:0,u:"../Content/release_notes/990/GLIMS-11257.htm",l:-1,t:"Release notes 9.9.0 - No automatic expansion of dynamic texts in Order entry screen (GLIMS-11257)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  No automatic expansion of dynamic texts in Order entry screen (GLIMS-11257) Background The Order entry screen contains four fields in which  dynamic texts can be inserted and expanded :  Report info, Object comment, Description (Order tab), Question (Extra tab). Issue When ..."},"3882":{y:0,u:"../Content/release_notes/992/GLIMS_OX-00138.htm",l:-1,t:"Release notes 9.9.2 - Order export should export all procedure data properties if multiple are defined on a procedure (GLIMS_OX-00138)",i:4.36103210702897E-05,a:"Release notes 9.9.2 -  Order export should export all procedure data properties if multiple are defined on a procedure (GLIMS_OX-00138) The order export of an order containing an action with two (or more) confirmed procedure data results would result in the outgoing electronic report (i.e. ..."},"3883":{y:0,u:"../Content/release_notes/993/GLIMS-12312.htm",l:-1,t:"Release notes 9.9.3 - Order entry screen no longer flickers when entering a panel with a lot of materials (GLIMS-12312)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Order entry screen no longer flickers when entering a panel with a lot of materials (GLIMS-12312) An issue was detected where requesting a  panel with a lot of materials during order entry was followed by multiple refresh actions which resulted in a flickering order entry ..."},"3884":{y:0,u:"../Content/release_notes/990/GLIMS_ANLZ-01357.htm",l:-1,t:"Release notes 9.9.0 - Ensure correct requested code creation for results received via point-of-care connection (GLIMS_ANLZ-01357)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Ensure correct requested code creation for results received via point-of-care connection (GLIMS_ANLZ-01357) In the following   point-of-care-connection -related circumstances, the Order in GLIMS was created but a requested code had only been created for the material and not ..."},"3885":{y:0,u:"../Content/release_notes/990/GLIMS_ANLZ-01367.htm",l:-1,t:"Release notes 9.9.0 - Avoid that QC population is updated with previously received QC result data (GLIMS_ANLZ-01367)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Avoid that QC population is updated with previously received QC result data (GLIMS_ANLZ-01367) QC results can be uploaded from the instrument to GLIMS with additional QC population-related data. The QC population in GLIMS is then  updated with the target and deviation values  ..."},"3886":{y:0,u:"../Content/release_notes/993/GLIMS-12596.htm",l:-1,t:"Release notes 9.9.3 - Requests should not be merged in case of time discriminators (GLIMS-12596)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Requests should not be merged in case of time discriminators (GLIMS-12596) In GLIMS 9.9, when entering a request (NA for instance), the request is added to the order correctly. However, when adding NA again with a time discriminator (+01:00 for instance), this request was ..."},"3887":{y:0,u:"../Content/db/reference_guide/complaintexportformat.htm",l:-1,t:"GLIMS reference guide - ComplaintExportFormat",i:9.44646822683606E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nPDF \nPDF \n2 \nXML \nXML \nFields \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3888":{y:0,u:"../Content/release_notes/990/MATE_RB-00161.htm",l:-1,t:"Release notes 9.9.0 - No error message anymore when creating a report preview (MATE_RB-00161)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  No error message anymore when creating a report preview (MATE_RB-00161) When creating a  report preview , an error message was sometimes displayed to indicate that a .jar file was missing. This issue has been solved: as this .jar file is actually not needed anymore, it is not ..."},"3889":{y:0,u:"../Content/db/reference_guide/mailmethod.htm",l:-1,t:"GLIMS reference guide - MailMethod",i:8.66162797165117E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nInternal \nInternal \n2 \nExternal \nExternal \n3 \nBoth \nBoth \nFields sc_User . MailMethod \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3890":{y:0,u:"../Content/release_notes/980/GLIMS-08458.htm",l:-1,t:"Release notes 9.8.0 - Error message displayed upon approval of non-selected report (GLIMS-08458)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Error message displayed upon approval of non-selected report (GLIMS-08458) When using the contextual menu/ribbon item  Approve  on a report without having selected this report, and the report did not refer to an HC provider, for instance, no error message was displayed. This ..."},"3891":{y:0,u:"../Content/release_notes/980/GLIMS_CBT-00185.htm",l:-1,t:"Release notes 9.8.0 - Blood product trigger not executed during blood bag administration via CyberTrack (GLIMS_CBT-00185)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Blood product trigger not executed during blood bag administration via CyberTrack (GLIMS_CBT-00185) Some MISPL triggers were no longer executed when administering a blood bag via CyberTrack. This was the case for e.g. the  Blood product  trigger When administered. This has ..."},"3892":{y:0,u:"../Content/db/reference_guide/qcs.htm",l:-1,t:"GLIMS reference guide - QCSchedule",i:0.000159154537324501,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nQC schedule \nqcs \nglims \nyes \nyes \nNormal \nQuality control actions for a given station need to be scheduled on a worklist. This table states: For a given worklist, on some positions in the beginning, middle or end of a ..."},"3893":{y:0,u:"../Content/release_notes/980/GLIMS_QC-00621.htm",l:-1,t:"Release notes 9.8.0 - Moving average or median results should not update \"Last QC time\" of assessment method (GLIMS_QC-00621)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Moving average or median results should not update \"Last QC time\" of assessment method (GLIMS_QC-00621) Problem description Each time a QC result enters the system, the time is recorded in the assessment method\u0027s Last QC time field. However, the assessment method\u0027s Last ..."},"3894":{y:0,u:"../Content/release_notes/992/GLIMS_BILL-03747.htm",l:-1,t:"Release notes 9.9.2 - Correction of automatic conversion of billing mark list to a comma-separated list (GLIMS_BILL-03747)",i:5.81271384838175E-05,a:"Release notes 9.9.2 -  Correction of automatic conversion of billing mark list to a comma-separated list (GLIMS_BILL-03747) This modification corrects the automatic conversion of the billing mark list(s)  defined for PolicyClause, PanelRequestable and PanelMember to a comma-separated list. This ..."},"3895":{y:0,u:"../Content/db/reference_guide/wiso.htm",l:-1,t:"GLIMS reference guide - w_WorkIsolation",i:0.000140283793000068,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nWork Isolation \nwiso \nN.A. \nno \nno \nNone \nTemporary work isolation, intended for generation of documents \nFields \nHealth office \nThe health office this isolation shopuld be reported to HealthOffice HealthOffice ..."},"3896":{y:0,u:"../Content/release_notes/990/GLIMS-11011.htm",l:-1,t:"Release notes 9.9.0 - Specimen reception scan: error when scanning unknown specimens in simultaneous sessions (GLIMS-11011)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Specimen reception scan: error when scanning unknown specimens in simultaneous sessions (GLIMS-11011) Context When scanning the barcode of a specimen unknown to GLIMS via the  specimen reception scan , an order and specimen are created (if the configuration allows their ..."},"3897":{y:0,u:"../Content/db/reference_guide/billingdocumentlinesorting.htm",l:-1,t:"GLIMS reference guide - BillingDocumentLineSorting",i:9.50777551856368E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nBilling code sort string \nB \n2 \nDiscount rate \nD \n3 \nExecutor mnemonic \nE \n4 \nExecutor name \ne \n5 \nGross amount \nG \n6 \nMaterial mnemonic \nM \n7 \nMaterial description \nm \n8 \nNomenclature code \nN \n9 \nProperty mnemonic \nP \n10 \nProperty description \np \n11 \nPanel ..."},"3898":{y:0,u:"../Content/release_notes/993/BILX_GKVDT-00436.htm",l:-1,t:"Release notes 9.9.3 - Support for new format of OMIM codes .csv file (BILX_GKVDT-00436)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Support for new format of OMIM codes .csv file (BILX_GKVDT-00436) GLIMS has been updated to support the new format of the OMIM codes .csv file."},"3899":{y:0,u:"../Content/release_notes/994/GLIMS-12469.htm",l:-1,t:"Release notes 9.9.4 - Order lowest object time was not updated when specimen sampling time was changed electronically (GLIMS-12469)",i:9.72912836843042E-05,a:"Release notes 9.9.4 -  Order lowest object time was not updated when specimen sampling time was changed electronically (GLIMS-12469) For an order containing a panel that is composed of a blood request, a property linked to a specimen, and an informative property (that is not linked to the specimen), ..."},"3900":{y:0,u:"../Content/release_notes/990/GLIMS_BTM-00991.htm",l:-1,t:"Release notes 9.9.0 - Fixed sorting in blood selection browser (GLIMS_BTM-00991)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Fixed sorting in blood selection browser (GLIMS_BTM-00991) An issue was detected where data in the  blood selection browser  was sorted incorrectly when trying to sort in descending order of order internal ID, urgency, blood bag status, blood group, rhesus, positive screening. ..."},"3901":{y:0,u:"../Content/release_notes/996/MATE-07174.htm",l:-1,t:"Release notes 9.9.6 - Fixed request code browser to show the entered search text when fast-positioning  (MATE-07174)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  Fixed request code browser to show the entered search text when fast-positioning  (MATE-07174) Double clicking in the Request field of the order entry screen opens the request code browser. When fast-positioning to a request code record in this browser, the entered search text ..."},"3902":{y:0,u:"../Content/release_notes/960/GLIMS_BAC-01125.htm",l:-1,t:"Release notes 9.6.0 - New (MISPL) function to mark isolation as \"To be reported officially\" (GLIMS_BAC-01125)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  New (MISPL) function to mark isolation as \"To be reported officially\" (GLIMS_BAC-01125) Introduction In some countries, labs are required to send a report to a health office when specific microorganisms are found. GLIMS allows to mark isolations as \" To be reported officially ..."},"3903":{y:0,u:"../Content/release_notes/990/GLIMS-11123.htm",l:-1,t:"Release notes 9.9.0 - Correction of error when opening the norms of assessment method browser (GLIMS-11123)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Correction of error when opening the norms of assessment method browser (GLIMS-11123) An issue was reported where an error occurred when opening the  Norms  browser from an Assessment method.  This issue, which occurred since GLIMS 9.8, has been corrected."},"3904":{y:0,u:"../Content/db/reference_guide/budgetortariff.htm",l:-1,t:"GLIMS reference guide - BudgetOrTariff",i:9.71129071951371E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nBudget \nB \n2 \nTariff \nT \n3 \nBudget and Tariff \nA \nFields \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3905":{y:0,u:"../Content/release_notes/990/GLIMS-11187.htm",l:-1,t:"Release notes 9.9.0 - Specimen.Attribute(\"StationCodeList\") should not include stations of actions with discontinued outputs (GLIMS-11187)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Specimen.Attribute(\"StationCodeList\") should not include stations of actions with discontinued outputs (GLIMS-11187) Issue The following MISPL functions behaved differently: Specimen.Attribute(\"StationCodeList\") Order.Attribute(\"StationCodeList\") Both return a comma-separated ..."},"3906":{y:0,u:"../Content/db/reference_guide/pricelisttype.htm",l:-1,t:"GLIMS reference guide - PriceListType",i:0.000105380395545435,a:"\nValue \nEnumerator \nAbbreviation \n1 \nStandard \nstd \n2 \nIssuer\u0027s \nissr \n3 \nSpecific \nspec \n4 \nFund \nfund \nFields w_ReimbursementClause . PriceListType PolicyClause . PriceListType \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3907":{y:0,u:"../Content/db/reference_guide/prpw.htm",l:-1,t:"GLIMS reference guide - PropertyWeight",i:9.80481313513377E-05,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nProperty weight \nprpw \nglims \nyes \nyes \nNormal \nThis table contains the statistical weights of properties, valid for a certain time period. \nFields \nCreation time Automatic DateTime CreationTime \nCreation user Automatic ..."},"3908":{y:0,u:"../Content/release_notes/996/GLIMS-13332.htm",l:-1,t:"Release notes 9.9.6 - Newlines added in rich text editor were not saved correctly  (GLIMS-13332)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  Newlines added in rich text editor were not saved correctly  (GLIMS-13332) When opening the rich text editor (from the genetic result screen for instance), adding some text with newlines, and clicking OK, the inserted newlines were removed.  This issue, which occurred since ..."},"3909":{y:0,u:"../Content/release_notes/993/GLIMS_GENX_LAB-00405.htm",l:-1,t:"Release notes 9.9.3 - Support export to Excel for grids in the Genetics module (GLIMS_GENX_LAB-00405)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Support export to Excel for grids in the Genetics module (GLIMS_GENX_LAB-00405) New functionality From now on, it is possible to export any  grid  inside the Genetics module to Microsoft Excel. Via the key combination CTRL+E, the selected grid is exported into an Excel file. ..."},"3910":{y:0,u:"../Content/release_notes/980/GLIMS_BILL-03276.htm",l:-1,t:"Release notes 9.8.0 - Allow update of Billing mark in Request editor for partially tariffed requests (GLIMS_BILL-03276)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Allow update of Billing mark in Request editor for partially tariffed requests (GLIMS_BILL-03276) It is now possible to update the Billing mark field in the Request editor for requests with Tariffing status set to Initial or Partial."},"3911":{y:0,u:"../Content/release_notes/990/GLIMS-11734.htm",l:-1,t:"Release notes 9.9.0 - No more locking errors during the editing of property classifications (GLIMS-11734)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  No more locking errors during the editing of property classifications (GLIMS-11734) Sometimes locking errors occurred when multiple users were simultaneously  editing a property classification . This issue has been solved, no further locking errors will occur."},"3912":{y:0,u:"../Content/release_notes/980/GLIMS-_.htm",l:-1,t:"Release notes 9.8.0 - Full recompilation for corrective versions and absence of corr.pl file",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Full recompilation for corrective versions and absence of corr.pl file Introduction For corrective versions of GLIMS, only the corrected parts used to be recompiled. In order to eliminate dependency issues and reduce UI translation inconsistencies, corrective versions are now ..."},"3913":{y:0,u:"../Content/release_notes/995/GLIMS_OI-00803.htm",l:-1,t:"Release notes 9.9.5 - Take a reference date into account when checking identification validity (GLIMS_OI-00803)",i:4.36103210702897E-05,a:"Release notes 9.9.5 -  Take a reference date into account when checking identification validity (GLIMS_OI-00803) Issue When the GLIMS database contains 2 correspondents with the same identification assigned by the same provider and, for one of the correspondents, the identification has an end date ..."},"3914":{y:0,u:"../Content/db/reference_guide/brsl.htm",l:-1,t:"GLIMS reference guide - BAMResult",i:0.000128993164309383,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nResult statistic \nbrsl \nglims \nyes \nyes \nNormal \nResult statistic count which can be used in a dashboard \nFields \nCount \nAggregated count Mandatory Automatic PositiveInteger Count \nCreation time Automatic ..."},"3915":{y:0,u:"../Content/release_notes/991/GLIMS_RX-00723.htm",l:-1,t:"Release notes 9.9.1 - Correct LAB-1 Order Status Change notifications  (GLIMS_RX-00723)",i:4.36103210702897E-05,a:"Release notes 9.9.1 -  Correct LAB-1 Order Status Change notifications  (GLIMS_RX-00723) This modification implements a correction for the Lab-1 Order Status Change message as it was not processed correctly in the following scenario: GLIMS receives an order with one request (with Order Placer code) ..."},"3916":{y:0,u:"../Content/release_notes/995/GLIMS_PYIP-00014.htm",l:-1,t:"Release notes 9.9.5 - Avoid error when importing a (large) CODA file without a unique \u0027continuous sequence number\u0027 (GLIMS_PYIP-00014)",i:4.36103210702897E-05,a:"Release notes 9.9.5 -  Avoid error when importing a (large) CODA file without a unique \u0027continuous sequence number\u0027 (GLIMS_PYIP-00014) An issue was reported where an error occurred when  importing  (file format = BVB I.5 (128)) a (large) CODA file  without a unique \u0027continuous sequence number\u0027 / ..."},"3917":{y:0,u:"../Content/db/reference_guide/isolationstatus.htm",l:-1,t:"GLIMS reference guide - IsolationStatus",i:9.84674761952081E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nAvailable \nAvl \n2 \nConfirmed \nCnf \n3 \nValidated \nVal \n4 \nDiscontinued \nDsc \nFields Isolation . Status IsolationHistory . Status \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3918":{y:0,u:"../Content/db/reference_guide/aord.htm",l:-1,t:"GLIMS reference guide - w_ArchivedOrder",i:8.15781036311155E-05,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nArchived order \naord \nN.A. \nno \nno \nNone \nFields \nDepartment mnemonic \nDepartment where this order was created Mnemonic DepartmentMnemonic \nIssuer internal id \nIssuer internal id of this order String IssuerInternalId ..."},"3919":{y:0,u:"../Content/db/reference_guide/confirmationmethod.htm",l:-1,t:"GLIMS reference guide - ConfirmationMethod",i:7.94587286384843E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nManual \nMan \n2 \nAutomatic \nAut \n3 \nResult code \nCode \n4 \nExternal \nExt \nManual: the Result.Confirm() method was invoked by the user\n Automatic: the result was automatically confirmed by the AssessmentMethod parametrization or via Mispl intervention\n Result code: ..."},"3920":{y:0,u:"../Content/db/reference_guide/chrr.htm",l:-1,t:"GLIMS reference guide - ChromosomeRegion",i:0.000139123458148403,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nChromosome region \nchrr \nglims \nyes \nyes \nNormal \nPart or range inside the chromosome. \nFields \nChromosome \nReferences the chromosome record. Mandatory  Chromosome Chromosome \nCreation time Automatic ..."},"3921":{y:0,u:"../Content/db/reference_guide/org.htm",l:-1,t:"GLIMS reference guide - Organization",i:0.000351935514976171,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nOrganization \norg \nglims \nyes \nyes \nNormal \nOrganizations are non-individual correspondents of a type not explicitly implemented in the other subtypes. They can be organized hierarchically. This hierarchy allows for ..."},"3922":{y:0,u:"../Content/release_notes/990/GLIMS_RI-00174.htm",l:-1,t:"Release notes 9.9.0 - Severity of imported result not set when OrderImportResultNorms=NO  (GLIMS_RI-00174)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Severity of imported result not set when OrderImportResultNorms=NO  (GLIMS_RI-00174) Context In an electronic order entry context, when a result is received electronically while the environment variable OrderImportResultNorms is set to NO (in the MA Section of the progress.ini ..."},"3923":{y:0,u:"../Content/release_notes/960/GLIMS_CBL-00001.htm",l:-1,t:"Release notes 9.6.0 - Export of prices for import in CyberLab (GLIMS_CBL-00001)",i:4.36103210702897E-05,a:"Release notes 9.6.0 -  Export of prices for import in CyberLab (GLIMS_CBL-00001) Introduction A new gp_Site-based function Export price list is now available. It can be used to export price information in CSV format. This CSV file can then be imported in CyberLab to offer a price indication during ..."},});