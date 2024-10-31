define({"3102":{y:0,u:"../Content/db/reference_guide/personrelationtype.htm",l:-1,t:"GLIMS reference guide - PersonRelationType",i:0.000130177732381906,a:"\nValue \nEnumerator \nAbbreviation \n1 \nparent \nparent \n2 \nchild \nchild \n3 \nsibling \nsibling \n4 \nhalve-sibling via father \nhalve-sibling via father \n5 \nhalve-sibling via mother \nhalve-sibling via mother \n6 \nparent of father \nparent of father \n7 \nparent of mother \nparent of mother \n8 \nchild of son ..."},"3103":{y:0,u:"../Content/release_notes/990/GLIMS-10741.htm",l:-1,t:"Release notes 9.9.0 - Day unit of discriminator can be language dependent again (GLIMS-10741)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Day unit of discriminator can be language dependent again (GLIMS-10741) Background During order entry, tests can be requested with a  discriminator . E.g. \"GLUC +08:00+7d\". The day unit \"d\" can be used to indicate that \u003cx\u003e days should be added. This day unit can be language ..."},"3104":{y:0,u:"../Content/release_notes/990/MATE-05928.htm",l:-1,t:"Release notes 9.9.0 - Additional, customizable tab page in About box (MATE-05928)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Additional, customizable tab page in About box (MATE-05928) Introduction GLIMS now allows to display an additional, customizable tab page Extra info in the  About box . It will only be visible if the configuration as described below is present in GLIMS. Configuration Choose ..."},"3105":{y:0,u:"../Content/release_notes/990/GLIMS-11394.htm",l:-1,t:"Release notes 9.9.0 - Reports of discontinued results marked as Needs checking (GLIMS-11394)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Reports of discontinued results marked as Needs checking (GLIMS-11394) This modification corrects an issue with the  discontinue-repeat  function on results: when a validated result was repeated, the accompanying discontinuation of that result did not mark the triggered  ..."},"3106":{y:0,u:"../Content/db/reference_guide/prlc.htm",l:-1,t:"GLIMS reference guide - PropertyLoincCode",i:0.000132784635041304,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nProperty LOINC code \nprlc \nglims \nyes \nyes \nWith Delete Audit \nFields \nAssessment method station AssessmentMethod AssessmentMethod \nId Mandatory Unique Invariant  Code Code \nCreation time Automatic DateTime CreationTime ..."},"3107":{y:0,u:"../Content/release_notes/997/MATE-07344.htm",l:-1,t:"Release notes 9.9.7 - Introduction of bilx.pl  (MATE-07344)",i:0.000117747924795937,a:"Release notes 9.9.7 -  Introduction of bilx.pl  (MATE-07344) In order to ease maintenance when billing regulations (e.g. for the German KBV) are changing, all logic related to these regulations will be put in one bilx.pl file that can be used for several versions of GLIMS (2023.1, 10.1, 10.0, 9.9, ..."},"3108":{y:0,u:"../Content/db/reference_guide/vatc.htm",l:-1,t:"GLIMS reference guide - VATCode",i:0.000217970094486035,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nVAT code \nvatc \nglims \nyes \nyes \nNormal \nThe VATCode table contains a record for each possible origin for VAT liability (e.g. services, luxury products). A VATCode record hides a series of consecutive effective vat ..."},"3109":{y:0,u:"../Content/db/reference_guide/amrc.htm",l:-1,t:"GLIMS reference guide - AssessmentReagentConsumption",i:0.000113471853620273,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nAssessment reagent consumption \namrc \nglims \nyes \nyes \nNone \nFields \nAssessment method Mandatory Invariant  AssessmentMethod AssessmentMethod \nConsumption Mandatory PositiveFractional Consumption \nCreation time ..."},"3110":{y:0,u:"../Content/release_notes/997/GLIMS-13528.htm",l:-1,t:"Release notes 9.9.7 - Upgrade to V12 of TAJ social security web service (Hungary) (GLIMS-13528)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Upgrade to V12 of TAJ social security web service (Hungary) (GLIMS-13528) This modification upgrades the TAJ social security web service from V10 to V12. Note The TAJ V12 WSDL file must be entered in the own organization. Calling the V12 web service with the old WSDL file will ..."},"3111":{y:0,u:"../Content/db/reference_guide/taskstatus.htm",l:-1,t:"GLIMS reference guide - TaskStatus",i:8.33173110940604E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nOpen \nOpn \n2 \nBusy \nBsy \n3 \nClosed \nCls \nFields Task . Status \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3112":{y:0,u:"../Content/release_notes/980/MATE-04154.htm",l:-1,t:"Release notes 9.8.0 - Enhancements for \"Database statistics\" function (MATE-04154)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Enhancements for \"Database statistics\" function (MATE-04154) Some enhancements were made to the  Database statistics  function (for Progress databases only). To be more specific, if the Show option is set to Locks, two new buttons Analyze and dump and Generate pro traces are ..."},"3113":{y:0,u:"../Content/release_notes/994/GLIMS-12173.htm",l:-1,t:"Release notes 9.9.4 - Fixed issue with caching of \"Show property descriptions\" order entry user option (GLIMS-12173)",i:4.36103210702897E-05,a:"Release notes 9.9.4 -  Fixed issue with caching of \"Show property descriptions\" order entry user option (GLIMS-12173) An issue was reported where refreshing the .NET version of the  Incomplete results browser  caused its Property column to switch between displaying the property short name and the ..."},"3114":{y:0,u:"../Content/release_notes/995/GLIMS_BTM-01151.htm",l:-1,t:"Release notes 9.9.5 - \"When received\" trigger was executed upon blood bag administration  (GLIMS_BTM-01151)",i:4.36103210702897E-05,a:"Release notes 9.9.5 -  \"When received\" trigger was executed upon blood bag administration  (GLIMS_BTM-01151) Upon administration of a blood bag, the MISPL expression specified in the When received field of the  Blood product  was evaluated as well, in addition to the MISPL expression specified in ..."},"3115":{y:0,u:"../Content/release_notes/990/GLIMS-11829.htm",l:-1,t:"Release notes 9.9.0 - Restriction concerning the number of characters in Department field on Person editor is removed (GLIMS-11829)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Restriction concerning the number of characters in Department field on Person editor is removed (GLIMS-11829) An issue was reported where the  Department  field in the Extra tab of the Person editor cut off all department mnemonics at the first 8 characters. When the user ..."},"3116":{y:0,u:"../Content/release_notes/997/GLIMS_GENX_LAB-00843.htm",l:-1,t:"Release notes 9.9.7 - Do not refresh Genetic exam screen when updating Genetic exam specific fields (GLIMS_GENX_LAB-00843)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Do not refresh Genetic exam screen when updating Genetic exam specific fields (GLIMS_GENX_LAB-00843) Issue Whenever the Desired date, Urgency, Family or Comment fields were updated in the  Genetic exam screen , the whole screen refreshed itself completely. As a result, it took ..."},"3117":{y:0,u:"../Content/release_notes/997/GLIMS_GENX_LAB-00652.htm",l:-1,t:"Release notes 9.9.7 - Adaptive XML export: improved rich text support (GLIMS_GENX_LAB-00652)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Adaptive XML export: improved rich text support (GLIMS_GENX_LAB-00652) Issues The following issues have been reported: The font size was bigger when printing a rich text via Jasper \u003ccustom\u003e tags did not support rich text Solution These issues, which occurred since GLIMS 9.9.0, ..."},"3118":{y:0,u:"../Content/db/reference_guide/wgct.htm",l:-1,t:"GLIMS reference guide - WestgardCheckTemplate",i:0.000150022562459997,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nWestgard check template \nwgct \nglims \nyes \nyes \nNormal \nThis table defines a Westgard (1) type check that can be carried out on the results belonging to quality control populations.\n 1. Trend detection in Control Data: ..."},"3119":{y:0,u:"../Content/release_notes/980/BILX_GKVDT-00099.htm",l:-1,t:"Release notes 9.8.0 - Financial export in \"German KVDT\" format (BILX_GKVDT-00099)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Financial export in \"German KVDT\" format (BILX_GKVDT-00099) The export of financial data in the German KVDT format (using the  FinancialShipment.Send  function) has been updated to support the latest changes (quarter 1, 2017) in KBV regulation."},"3120":{y:0,u:"../Content/db/reference_guide/pcla.htm",l:-1,t:"GLIMS reference guide - PropertyClass",i:0.000174786420403417,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nProperty domain \npcla \nglims \nyes \nyes \nNormal \nPropertydomains are user definable groups of properties. Each property can be assigned to 1 property domain.  \nFields \nCreation time Automatic DateTime CreationTime ..."},"3121":{y:0,u:"../Content/release_notes/940/GLIMS-06355.htm",l:-1,t:"Release notes 9.4.0 - Support new values for Patient.Sex (GLIMS-06355)",i:4.36103210702897E-05,a:"Release notes 9.4.0 -  Support new values for Patient.Sex (GLIMS-06355) GLIMS now supports the following values for the Patient field Sex: Warning These new values may not be supported by drivers and/or external software. Warning Customers may have site functions with IF ... THEN ... constructs that ..."},"3122":{y:0,u:"../Content/release_notes/950/GLIMS_BAC-01091.htm",l:-1,t:"Release notes 9.5.0 - New MISPL function AntibioticResult.AddComment (GLIMS_BAC-01091)",i:4.36103210702897E-05,a:"Release notes 9.5.0 -  New MISPL function AntibioticResult.AddComment (GLIMS_BAC-01091) A new MISPL function AntibioticResult.AddComment(String Comment, Logical Append) has been introduced to allow adding comments to an antibiotic result via MISPL.  It has two parameters: Comment: text to be added ..."},"3123":{y:0,u:"../Content/release_notes/980/GLIMS_BILL-03299.htm",l:-1,t:"Release notes 9.8.0 - Correction for error in \"Price consultation\"  (GLIMS_BILL-03299)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Correction for error in \"Price consultation\"  (GLIMS_BILL-03299) An issue was reported where an error occurred when using the  Price consultation  function (Start \u003e Routine \u003e Orders \u003e Price consultation). This has been corrected."},"3124":{y:0,u:"../Content/release_notes/997/MATE-07318.htm",l:-1,t:"Release notes 9.9.7 - Error when logging in with LDAP if logging was enabled (MATE-07318)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Error when logging in with LDAP if logging was enabled (MATE-07318) When logging in using LDAP, logging is disabled temporarily to avoid writing passwords to the clientlog. Afterwards, logging was enabled again, but with a different logging level than before LDAP login. As a ..."},"3125":{y:0,u:"../Content/release_notes/980/MATE-05623.htm",l:-1,t:"Release notes 9.8.0 - Add logging when specifying the patient for an existing order created without an object (MATE-05623)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Add logging when specifying the patient for an existing order created without an object (MATE-05623) An issue was reported where the  order log  was not updated when an order had been created without specifying the patient (object) and the patient was specified later on via F6 ..."},"3126":{y:0,u:"../Content/db/reference_guide/diagnosistype.htm",l:-1,t:"GLIMS reference guide - DiagnosisType",i:8.66471550008543E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nUnknown \nUnk \n2 \nAdmission \nAdm \n3 \nHospitalization \nHos \n4 \nFollow-up \nFol \n5 \nTreatment \nTre \n6 \nTransfer \nTrf \n7 \nDischarge \nDis \n8 \nOperation \nOp \nFields Diagnosis . Type \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3127":{y:0,u:"../Content/release_notes/980/GLIMS_BAM-00026.htm",l:-1,t:"Release notes 9.8.0 - TAT monitor: all properties shown and sorted according to sequence number (GLIMS_BAM-00026)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  TAT monitor: all properties shown and sorted according to sequence number (GLIMS_BAM-00026) Background The  TAT monitor  of the Business Activity monitor shows, for each property for which turnaround time limits are defined, the number of results which were confirmed and ..."},"3128":{y:0,u:"../Content/release_notes/930/MATE-03012.htm",l:-1,t:"Release notes 9.3.0 - Introduction of password strength levels (MATE-03012)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Introduction of password strength levels (MATE-03012) In the  general options  (System management -\u003e Customize -\u003e MATE), you can now set the password strength to be applied when choosing a  password . Medium Existing behavior, very few restrictions. High The following rules ..."},"3129":{y:0,u:"../Content/db/reference_guide/extp.htm",l:-1,t:"GLIMS reference guide - w_ExternalPatient",i:0.00015714015080654,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nExternal patient \nextp \nN.A. \nno \nno \nNone \nExternally imported patient \nFields \nAddress line 1 \nPatient\u0027s addressline 1 String AddressLine1 \nAddress line 2 \nPatient\u0027s addressline 2 String AddressLine2 \nBirth date ..."},"3130":{y:0,u:"../Content/release_notes/990/BILX_CPOWISH-00093.htm",l:-1,t:"Release notes 9.9.0 - Financial export in CPOWISH IHPREST format: option to allow sending supplements (BILX_CPOWISH-00093)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Financial export in CPOWISH IHPREST format: option to allow sending supplements (BILX_CPOWISH-00093) The  export of financial data  in the CPOWISH IHPREST format now allows to export supplements (billing items that are not linked to a request). For this purpose, a new option ..."},"3131":{y:0,u:"../Content/release_notes/997/MATE-07220.htm",l:-1,t:"Release notes 9.9.7 - Incorrect display of rich text when copy-pasting HTML text with diacritic characters in rich text editor (MATE-07220)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  Incorrect display of rich text when copy-pasting HTML text with diacritic characters in rich text editor (MATE-07220) When copy-pasting HTML text with diacritic characters into a rich text editor, the characters were not displayed correctly in GLIMS. This issue has been ..."},"3132":{y:0,u:"../Content/release_notes/996/GLIMS_BAC-01787.htm",l:-1,t:"Release notes 9.9.6 - Fixed issue where Isolation record remained locked (GLIMS_BAC-01787)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  Fixed issue where Isolation record remained locked (GLIMS_BAC-01787) If two GLIMS sessions were open for the same microbiology action and the user changed the reportability of the isolation in one session, the changed Isolation record remained locked. As a result, the ..."},"3133":{y:0,u:"../Content/release_notes/994/GLIMS_GENX_LAB-00409.htm",l:-1,t:"Release notes 9.9.4 - Additional space for foetus information labels   in the Family screen (GLIMS_GENX_LAB-00409)",i:4.36103210702897E-05,a:"Release notes 9.9.4 -  Additional space for foetus information labels   in the Family screen (GLIMS_GENX_LAB-00409) In the German and French versions of GLIMS an issue was detected where some labels for the foetus information in the  right pane of the Family screen  were too short. The space for the ..."},"3134":{y:0,u:"../Content/db/reference_guide/acnt.htm",l:-1,t:"GLIMS reference guide - Account",i:0.000139192813748579,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nAccount \nacnt \nglims \nyes \nyes \nNormal \nThis table is used for communication with accounting modules. It offers the possibility to pass an invoice summary to an accounting system. \nFields \nCreation time Automatic ..."},"3135":{y:0,u:"../Content/release_notes/990/GLIMS-10992.htm",l:-1,t:"Release notes 9.9.0 - Inactive request codes no longer displayed in order entry (GLIMS-10992)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Inactive request codes no longer displayed in order entry (GLIMS-10992) When browsing through the  request codes  in the Request field of the  order entry screen  using the arrow keys,   request codes of which the option Enabled was not set were also shown.  This has been ..."},"3136":{y:0,u:"../Content/release_notes/990/GLIMS-11916.htm",l:-1,t:"Release notes 9.9.0 - Improved performance of urgency monitor in GLIMS for Oracle (GLIMS-11916)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Improved performance of urgency monitor in GLIMS for Oracle (GLIMS-11916) In the Oracle version of GLIMS, the  urgency monitor  was slow when an Executing department group and a Classification were used as query parameters. This has been corrected and the performance is now ..."},"3137":{y:0,u:"../Content/release_notes/990/MATE-06110.htm",l:-1,t:"Release notes 9.9.0 - No error when scrolling in Orders browser while Blood selections browser is open (MATE-06110)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  No error when scrolling in Orders browser while Blood selections browser is open (MATE-06110) In the following scenario, a Microsoft .NET framework error occurred: open the browser Orders by internal id, use the contextual menu item Object -\u003e Transfusion -\u003e Blood bag ..."},"3138":{y:0,u:"../Content/release_notes/980/GLIMS_QCR8-00014.htm",l:-1,t:"Release notes 9.8.0 - Correction for QCPopulation.RilibakOrigin field (Germany only) (GLIMS_QCR8-00014)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Correction for QCPopulation.RilibakOrigin field (Germany only) (GLIMS_QCR8-00014) Background information In GLIMS 8, the site attribute QCPopulation.RMSDOrigin is a reference to the RiliBÄK test analysis tables, e.g. table B1. In GLIMS 9, this site attribute was converted to ..."},"3139":{y:0,u:"../Content/db/reference_guide/bloodproductaferese.htm",l:-1,t:"GLIMS reference guide - BloodProductAferese",i:8.72268479544016E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nNone \nNone \n2 \nManual \nMan \nFields BloodProductSpecification . Aferese \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3140":{y:0,u:"../Content/release_notes/996/GLIMS_BTM-01168.htm",l:-1,t:"Release notes 9.9.6 - Error when using the \"When Returned\" or \"When Checked out\" trigger for a blood product (GLIMS_BTM-01168)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  Error when using the \"When Returned\" or \"When Checked out\" trigger for a blood product (GLIMS_BTM-01168) This modification fixes the following issues which affected the  blood product triggers When returned and When checked out. When returned Error message because of the ..."},"3141":{y:0,u:"../Content/modules/blood_transfusion/configuration/patient_blood_group/mispl_examples/BGRhesus_property_trigger.htm",l:-1,t:"BGRhesus property trigger",i:5.9342087249369E-05,a:"Trigger table\t\t: ResultOutput                                              \nTrigger description\t: CompareCurToPrevAndFillAttribute    \nData type\t\t\t: Logical             [V]                                     \nDefinition\t\t: /* Comparison of the current bloodgroup/rhesus-result \n\t\t\tto the previous ..."},"3142":{y:0,u:"../Content/release_notes/997/BILX_CAREVXML-00042.htm",l:-1,t:"Release notes 9.9.7 - MyCareNet insurability import: improved closure of payment agreements (Belgium) (BILX_CAREVXML-00042)",i:4.36103210702897E-05,a:"Release notes 9.9.7 -  MyCareNet insurability import: improved closure of payment agreements (Belgium) (BILX_CAREVXML-00042) Issue Due to a database restriction (end date \u003e= start date), overlapping  payment agreements  could not always be closed with their end date during MyCareNet insurability ..."},"3143":{y:0,u:"../Content/db/reference_guide/budg.htm",l:-1,t:"GLIMS reference guide - Budget",i:0.000161013401495711,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nBudget \nbudg \nglims \nyes \nyes \nNone \nThis table holds the budgets per correspondent, per period and per budget class. Budget calculation is defined by BudgetDefinitions. A Budget is made up of BudgetInvoices. \nFields ..."},"3144":{y:0,u:"../Content/release_notes/996/GLIMS_GENX_LAB-00795.htm",l:-1,t:"Release notes 9.9.6 - Refreshing the genetic result screen changed the working activity and deselected the selected activities (GLIMS_GENX_LAB-00795)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  Refreshing the genetic result screen changed the working activity and deselected the selected activities (GLIMS_GENX_LAB-00795) Context Initially, the genetic result screen was designed to automatically select the working activity when opening or refreshing the screen. As a ..."},"3145":{y:0,u:"../Content/release_notes/993/GLIMS-12507.htm",l:-1,t:"Release notes 9.9.3 - Specimen reception scan: material button screen always used the default font (GLIMS-12507)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Specimen reception scan: material button screen always used the default font (GLIMS-12507) An issue was reported where the  material button screen  of the  specimen scan program  always used the default font even when the dynamic text that  defines the button screen used ..."},"3146":{y:0,u:"../Content/db/reference_guide/dynamictype.htm",l:-1,t:"GLIMS reference guide - DynamicType",i:7.94587286384843E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nNone \n2 \nRelative \nR \n3 \nAbsolute \nA \n4 \nUnknown \nU \n5 \nDiscriminator \nD \nFields Result . DynamicType \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3147":{y:0,u:"../Content/release_notes/980/BILX_IRISLB2-00002.htm",l:-1,t:"Release notes 9.8.0 - Improvement for the French billing module \"FSE\": export of MAU (BILX_IRISLB2-00002)",i:4.36103210702897E-05,a:"Release notes 9.8.0 -  Improvement for the French billing module \"FSE\": export of MAU (BILX_IRISLB2-00002) For the French invoicing module FSE, GLIMS now supports exporting MAU (\"Majoration Acte Unique\") and AMI billing items via Pyxbio."},"3148":{y:0,u:"../Content/release_notes/990/GLIMS_CONSXT-00036.htm",l:-1,t:"Release notes 9.9.0 - Support for pre-configured \"Consult registration\" (GLIMS_CONSXT-00036)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Support for pre-configured \"Consult registration\" (GLIMS_CONSXT-00036) The  Register consult  function can now be used in a  tool  with a pre-configured parameter set. The parameter set allows the user to pre-define the Consult type and the Target. The Target can be the target ..."},"3149":{y:0,u:"../Content/release_notes/990/MATE-06070.htm",l:-1,t:"Release notes 9.9.0 - No error messages in ribbon configuration tool (MATE-06070)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  No error messages in ribbon configuration tool (MATE-06070) When using the  ribbon configuration tool , error messages appeared. This has been corrected."},"3150":{y:0,u:"../Content/release_notes/995/BILX_AFS-00001.htm",l:-1,t:"Release notes 9.9.5 - New \u0027AFS Amsterdam\u0027 protocol for export of financial data (BILX_AFS-00001)",i:4.36103210702897E-05,a:"Release notes 9.9.5 -  New \u0027AFS Amsterdam\u0027 protocol for export of financial data (BILX_AFS-00001) The  FinancialShipment.Send  function has been extended with a new protocol: AFS Amsterdam. The new protocol is similar to the GGD protocol but: one output file instead of 3 separate files column ..."},"3151":{y:0,u:"../Content/release_notes/990/GLIMS_STCK-00597.htm",l:-1,t:"Release notes 9.9.0 - Purchase order fields correctly filled in (GLIMS_STCK-00597)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Purchase order fields correctly filled in (GLIMS_STCK-00597) Since GLIMS 9.8, the following  purchase order  fields were no longer filled in: Approved at {ApprovalTime} Approved by {ApprovingUser} Sent at {SendingTime} Sent by {SendingUser} In all GLIMS versions, the following ..."},"3152":{y:0,u:"../Content/release_notes/950/MATE-03703.htm",l:-1,t:"Release notes 9.5.0 - Only allow Logical site functions as filter (MATE-03703)",i:4.36103210702897E-05,a:"Release notes 9.5.0 -  Only allow Logical site functions as filter (MATE-03703) When defining a new browser  Filter , the Type field will now automatically be set to Logical."},"3153":{y:0,u:"../Content/db/reference_guide/ml41.htm",l:-1,t:"GLIMS reference guide - gp_TextText",i:0.000121380384768223,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nText Text \nml41 \ngenrw \nno \nyes \nWith Delete Audit \nMultilingual text table for gp_Text.txt_Text \nFields \nId \nPrimary key. Automatically generated identifier whose value uniquely identifies each record. Mandatory Unique ..."},"3154":{y:0,u:"../Content/db/reference_guide/qcselection.htm",l:-1,t:"GLIMS reference guide - QCSelection",i:8.70790787309682E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nAuditable \nAuditable \n2 \nUnreliable channel \nUnreliable channel \n3 \nError in last result \nError in last result \n4 \nError on channel \nError on channel \n5 \nError today \nError today \n6 \nToday \nToday \n7 \nChannel overdue \nChannel overdue \nFields \nCopyright © 2019 MIPS ..."},"3155":{y:0,u:"../Content/release_notes/990/GLIMS_BILL-03614.htm",l:-1,t:"Release notes 9.9.0 - Only display the calculated \"Unpaid amount\" for HC providers and persons (GLIMS_BILL-03614)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  Only display the calculated \"Unpaid amount\" for HC providers and persons (GLIMS_BILL-03614) Issue Opening the  Correspondent  editor and browser could be slow, especially in environments without  payment follow up , due to the calculation of the Unpaid amount (which is the ..."},"3156":{y:0,u:"../Content/db/reference_guide/paymentagreementmatrtype.htm",l:-1,t:"GLIMS reference guide - PaymentAgreementMatrType",i:0.000101356646037412,a:"\nValue \nEnumerator \nAbbreviation \n1 \nBelgian national number \nBeNN \n2 \nBelgian matriculation number \nBeMatnr \n3 \nBelgian internationaltreaties number \nBeIntTreatnr \n4 \nBelgian free number \nBeFreenr \n5 \nGerman eGknumber \nDeEgk \n6 \nGerman Versichertennumber \nDeVers \n7 \nGerman free number \nDeFreeNr ..."},"3157":{y:0,u:"../Content/release_notes/993/GLIMS_GENX_LAB-00354.htm",l:-1,t:"Release notes 9.9.3 - Work list: allow inserting locus/variant results if only one action is selected (GLIMS_GENX_LAB-00354)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Work list: allow inserting locus/variant results if only one action is selected (GLIMS_GENX_LAB-00354) An issue was detected where it was not possible to insert  locus / variant results  in the work list screen upon opening it, when there was a preselected action. The message ..."},"3158":{y:0,u:"../Content/release_notes/930/GLIMS_QC-00590.htm",l:-1,t:"Release notes 9.3.0 - Import of QC configuration from Sysmex (GLIMS_QC-00590)",i:4.36103210702897E-05,a:"Release notes 9.3.0 -  Import of QC configuration from Sysmex (GLIMS_QC-00590) Introduction GLIMS now allows to  import \n QC data provided by Sysmex  through an Excel file.  The program \n is available from the main menu via Start -\u003e System management -\u003e \n Database -\u003e Specific import -\u003e QC ..."},"3159":{y:0,u:"../Content/release_notes/993/BILX_GKVDT-00437.htm",l:-1,t:"Release notes 9.9.3 - Financial export in German \"KVDT\" format: update Q1-2020 (BILX_GKVDT-00437)",i:4.36103210702897E-05,a:"Release notes 9.9.3 -  Financial export in German \"KVDT\" format: update Q1-2020 (BILX_GKVDT-00437) The export of financial data in the German KVDT format (using the  FinancialShipment.Send  function) has been updated to support the changes (quarter 1, 2020) in KBV regulation."},"3160":{y:0,u:"../Content/release_notes/996/GLIMS_GENX_LAB-00689.htm",l:-1,t:"Release notes 9.9.6 - Fixed issue of missing columns in column chooser pop-up (GLIMS_GENX_LAB-00689)",i:4.36103210702897E-05,a:"Release notes 9.9.6 -  Fixed issue of missing columns in column chooser pop-up (GLIMS_GENX_LAB-00689) If the user has defined one or more customised columns via List detail types and the list detail type\u0027s mnemonic contained the name of an existing column in the Locus results/Variant results grid, ..."},"3161":{y:0,u:"../Content/release_notes/990/GLIMS-10662.htm",l:-1,t:"Release notes 9.9.0 - GetPriorResult ignores duplicated results (GLIMS-10662)",i:4.36103210702897E-05,a:"Release notes 9.9.0 -  GetPriorResult ignores duplicated results (GLIMS-10662) Context The Result-based MISPL function GetPriorResult(1,?) returns the id of the most recent previous result. Example Example Say there are two results: R1 and R2. R2 was measured just after R1. Using GetPriorResult(1,?) ..."},"3162":{y:0,u:"../Content/db/reference_guide/executionmode.htm",l:-1,t:"GLIMS reference guide - ExecutionMode",i:8.52813808764059E-05,a:"\nValue \nEnumerator \nAbbreviation \n1 \nLocal \nL \n2 \nAppserver \nA \nExecute locally or on the appserver \nFields \nCopyright © 2019 MIPS N.V. \nAll rights reserved."},"3163":{y:0,u:"../Content/db/reference_guide/spid.htm",l:-1,t:"GLIMS reference guide - SpecimenIdentification",i:0.000115746782638044,a:"\nName \nShort name \nDatabase \nCreation logging \nUpdate logging \nExtended logging \nSpecimen identification \nspid \nglims \nyes \nyes \nNone \nThis table stores the actual specimen identifications. \nFields \nCode \nCode of this specimen identification Mandatory String Code \nCreation time Automatic ..."},});