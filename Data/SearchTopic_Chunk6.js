define({"411":{y:0,u:"../Content/modules/billing/tariffication/configuration/tariffication_erd.htm",l:-1,t:"Price setting overview",i:0.000367214494978282,a:"Price setting: configuration overview This document provides an overview of the GLIMS tables that are to be configured for price setting.  Each table has been given a sequence number in order to indicate a logical configuration path. Requestables  (request definitions): the Requestable table is not ..."},"412":{y:0,u:"../Content/modules/billing/tariffication/configuration/tariffication_requestables.htm",l:-1,t:"Requestables",i:0.000177391607023605,a:"Request definitions Each property has a default request definition. When inserting \n a property in GLIMS, a default request definition is automatically created with \n the same name of the property mnemonic. An order consists of different requests. Requests are only billed by \n means of the request ..."},"413":{y:0,u:"../Content/modules/billing/tariffication/configuration/billing_marks.htm",l:-1,t:"Billing marks",i:0.00114812038353758,a:"Contents:  Introduction  -  Billing \n mark definition  -  Billing mark \n assignment  -  Support in policy \n clauses Introduction GLIMS allows assigning a billing mark to each request entered in the \n  order entry \n screen .  This billing mark may for instance indicate that the \n request is to be ..."},"414":{y:0,u:"../Content/modules/billing/tariffication/configuration/price_codes.htm",l:-1,t:"Price codes",i:0.000325553298570198,a:"The total price of a test will be calculated by means of a price code and a  price formula . Therefore, each tariff is linked to one or more price codes. The price code stands for a way of calculating prices. All tariff records for which the price calculation is and will be based on the same ..."},"415":{y:0,u:"../Content/modules/billing/tariffication/configuration/price_formulas.htm",l:-1,t:"Price formula\u0027s",i:0.00060218170662256,a:"Price formulas Introduction A  price code  is used to refer indirectly \n to a formula determining a price. The indirection is \n necessary since the exact implementation of such a formula may depend \n on time. The indirection offers the possibility to modify the \n price calculation of a group of ..."},"416":{y:0,u:"../Content/modules/billing/tariffication/configuration/price_lists.htm",l:-1,t:"Price lists",i:0.000177391607023605,a:"A price list determines which  tariff  \n records are used for a billing code. Usually there is a default price \n list which is specified by an official institution (fund) as e.g. RIZIV \n (Belgium). Other price lists can be created for e.g. tests executed in \n a commercial context, etc. Price lists ..."},"417":{y:0,u:"../Content/modules/billing/invoicing/routine/price_lists_print.htm",l:-1,t:"Print price list",i:0.000537808080204589,a:"Contents:  Introduction  -   Query \n-  General price list selection  -  Price\nlist selection by payment agreement  -  Options Introduction GLIMS allows to generate an overview of a specified price list.  From \n the main menu, click Start -\u003e \n Billing -\u003e Print \n price list. Query General price ..."},"418":{y:0,u:"../Content/modules/billing/invoicing/configuration/discounts.htm",l:-1,t:"discounts",i:0.00111058789923352,a:"Discounts GLIMS offers support for four kind of discounts: Discount fields Turnover discounts Standard discounts Issuer-specific discounts Panel discount for issuer invoices Copying a discount formula Discount fields Discountable:  it is possible to mark a price list so that discounts do not apply ..."},"419":{y:0,u:"../Content/modules/billing/tariffication/configuration/reimbursement_classes.htm",l:-1,t:"Reimbursement classes",i:6.96218864611692E-05,a:"Reimbursement classes group a number of billing codes which should be reimbursed in a similar way. The association between billing codes and reimbursement classes is time-dependent. Examples of Belgian reimbursement classes are major and minor risks, supplements and commercial tests. The ..."},"420":{y:0,u:"../Content/modules/billing/tariffication/configuration/billing_codes.htm",l:-1,t:"Billing codes",i:0.000733781053689126,a:"Billing codes group request definitions which should be tariffed in a similar way. The billing code level is an intermediate level between lab deliveries (especially properties) and price setting configuration. It avoids price setting specifications to be repeated for each specific property, ..."},"421":{y:0,u:"../Content/modules/billing/tariffication/configuration/billing_codes_validation.htm",l:-1,t:"Billing codes - Validation",i:4.36103210702897E-05,a:"Description GLIMS offers a feature to validate/modify the billing code and/or executor \n for tests executed by subcontractor lab. Configuration Define a new site attribute on the table \"Lab\", type \n\t \"Logical\", named \"_ConfirmBillingCodes\" \n\t  Enable this new option for the executing labs for which ..."},"422":{y:0,u:"../Content/modules/billing/tariffication/configuration/tariffs.htm",l:-1,t:"Tariffs",i:0.000302756812452123,a:"As explained in the previous chapter,  request definitions  \n are linked to  billing codes . These billing \n codes are now linked to tariffs. \n Each tariff belongs to one  price list , allowing \n for different nomenclature codes and prices per price list. A tariff specifies the nomenclature code and ..."},"423":{y:0,u:"../Content/modules/billing/tariffication/configuration/billing_code_assignments.htm",l:-1,t:"Billing code assignments",i:0.000706438331063871,a:"Introduction A billing code assignment \n associates one or more billing codes with a request definition, medium, \n medium test, micro-organism, micro-organism test, etc.: Fields Valid \n from - until A billing code is time-dependent.   Eligible \n count MISPL expression that can be defined to ..."},"424":{y:0,u:"../Content/modules/billing/tariffication/configuration/executing_classes_provisions.htm",l:-1,t:"Executing classes",i:0.00114211089116208,a:"Contents:  Introduction  -  Executing classes Introduction For legal purposes, you have to be able to indicate who is responsible for the tariffication.  In GLIMS, this is implemented via executing classes and provisions.   As shown in the  price setting overview , the executing class can be ..."},"425":{y:0,u:"../Content/modules/billing/tariffication/configuration/provisions.htm",l:-1,t:"Provisions",i:0.000465217084051347,a:"From each  executing class  \n you can choose the contextual menu function \u0027Provisions\u0027 and assign a provision \n to determine the responsible for the tariffication: Executor The responsible \n health care provider. Lab The responsible \n lab (and thereby its associated default firm). Accredited ..."},"426":{y:0,u:"../Content/modules/billing/tariffication/configuration/tariffication_microbioloy_pathology_transfusion.htm",l:-1,t:"Microbiology, pathology and BTM tariffication",i:0.000343849628039064,a:"Microbiology, pathology and blood transfusion tariffication In previous versions In microbiology, the billing codes typically depend on the medium or micro-organism test.  To support this in previous Glims versions, this required complex MISPL expressions in the field ..."},"427":{y:0,u:"../Content/modules/billing/tariffication/routine/tariffication_roles.htm",l:-1,t:"Who is involved in the billing process ?",i:0.000190973436363294,a:"It is important to make a distinction between the type of a correspondent \n in GLIMS and the role that will be played in the in an order. In this \n context, we will be speaking about the role of a correspondent. \n Example: an issuer (role!) does not always need to be \n a HC Provider (Type). The ..."},"428":{y:0,u:"../Content/modules/billing/tariffication/configuration/policy_clauses.htm",l:-1,t:"Who will pay which part of the cost ?",i:0.000346733287353375,a:"Who will pay which part of the cost? Introduction In order to determine who will pay which part of the costs, GLIMS allows defining policies and underlying policy clauses.  Each policy has a number of policy clauses (at least one for each reimbursement class that occurs in the order). The policy ..."},"429":{y:0,u:"../Content/modules/billing/tariffication/tariffication_overview.htm",l:-1,t:"General overview",i:4.36103210702897E-05,a:"of the tariffication process This page merely gives an overview of how all the tariffication tables are linked to\neach other. Determining the price... Parties involved Both at order, order set and payment\nagreement level, a number of correspondents are introduced in the tariffication\nprocess. All ..."},"430":{y:0,u:"../Content/modules/billing/tariffication/configuration/order_sets.htm",l:-1,t:"Order sets",i:0.000163833395037265,a:"Contents:  Introduction  -  Order set defaults and order set determination MISPL  -  Order \n set query and tariffication Introduction It is essential to know that GLIMS tariffs order \n sets and not orders. Whenever the tariffication of a request is influenced by the presence \n of other requests in ..."},"431":{y:0,u:"../Content/modules/billing/tariffication/routine/order_set_tariffication.htm",l:-1,t:"OrderSet.Tariffication",i:0.000171897406889268,a:"Contents:  Introduction  -  OrderSet.Tariffication  \n -  Quick invoice Introduction As explained in the  \"Order \n set\" chapter , GLIMS tariffs order sets and not orders.  There \n are two ways to tariff an order set, via the OrderSet.Tariffication function \n or via the quick invoice program. ..."},"432":{y:0,u:"../Content/modules/billing/tariffication/routine/order_set_verify_tariffication.htm",l:-1,t:"OrderSet.VerifyTariffication",i:4.36103210702897E-05,a:"From each order set you can select the contextual menu function \"Verify tariffication\".  This function performs the actual tariffication and gives an overview of all tariffication data. If the order set is already tariffed, the available data will immediately be displayed.  If the order set is not ..."},"433":{y:0,u:"../Content/modules/billing/tariffication/routine/order_set_retariff.htm",l:-1,t:"How to re-tariff an order set",i:4.36103210702897E-05,a:"The way to re-tariff an order set depends on the current tariffication status of the order set, invoice, invoice summary and financial shipment.  An order set can only be re-tariffed if it has not yet reached the status \u0027Complete\u0027. Several situations can occur: 1. Order set status = complete AND ..."},"434":{y:0,u:"../Content/modules/billing/tariffication/tariffication_logging.htm",l:-1,t:"Tariffication logging",i:6.21447220017015E-05,a:"Tariffication logging All tariffication logging is written to database, except the  price consultation  logging, which is written to screen."},"435":{y:0,u:"../Content/modules/billing/invoicing/index_invoicing.htm",l:-1,t:"Invoicing - Introduction",i:5.0808147824511E-05,a:"Invoicing: Introduction Contents:  Invoicing process Invoicing process The tariffication chapters describe how the prices are calculated, who \n pays what part of the costs, etc. This invoice chapter describes how order \n sets are created, how invoices are generated for the tariffed order sets, \n how ..."},"436":{y:0,u:"../Content/modules/billing/invoicing/routine/invoices.htm",l:-1,t:"Invoicing - Invoices",i:0.000718975821099223,a:"Invoicing: Invoices Contents:  Introduction  -  Invoice access  -  Fields Introduction During tariffication, GLIMS will automatically generate one or more invoices for each order in the order set; e.g. an invoice for the health insurance company and one for the patient (depending on the patient\u0027s ..."},"437":{y:0,u:"../Content/modules/billing/invoicing/configuration/invoice_grouping_type.htm",l:-1,t:"Invoicing - Invoice grouping type",i:0.000636503658972635,a:"Invoicing: Invoice grouping type Contents:  Introduction  -  Fields Introduction When grouping invoices on an invoice summary (using the  Invoice.InvoiceSummaryCreation  function), an invoice grouping type must be specified.  The latter determines how the invoices are grouped.  The invoice grouping ..."},"438":{y:0,u:"../Content/modules/billing/invoicing/routine/invoices_of_object.htm",l:-1,t:"Invoices of object",i:4.36103210702897E-05,a:"Introduction The function \"Invoices of object\" in the contextual menu of Object and Order \ndisplays all invoices of the patient\u0027s orders (sorted by receipt date).  \nIts main goal is the detection of unpaid invoices.  Screen features and options Title Title containing the object\u0027s total unpaid ..."},"439":{y:0,u:"../Content/modules/billing/invoicing/routine/invoices_pro_forma.htm",l:-1,t:"Invoicing - Pro forma invoices",i:0.000290709200637439,a:"Invoicing: Pro forma invoices Contents:  Introduction  -  Configuration  \n -  Generation Introduction Pro forma invoices can be considered as \u0027unofficial\u0027 invoices which are not\npermanently stored in GLIMS.  They can only be printed during report\ngeneration and will be deleted as soon as they have ..."},"440":{y:0,u:"../Content/modules/billing/invoicing/routine/invoices_assign_document_number.htm",l:-1,t:"Invoicing - Invoice.AssignDocumentNumber",i:4.36103210702897E-05,a:"Invoice.AssignDocumentNumber This function assigns a document number to the invoice. The invoice number is generated by a dedicated site function, defined in the site specific configuration. The function skips invoices that are already in the status numbered or higher. External date: date that must ..."},"441":{y:0,u:"../Content/modules/billing/invoicing/routine/invoices_billing_item_confirmation.htm",l:-1,t:"Invoicing - Invoice.BillingItemConfirmation",i:4.36103210702897E-05,a:"Invoice.BillingItemConfirmation This function sets the \u0027Confirmation status\u0027 field of the billing items \n on the selected invoices. This method actually has 2 phases: In the first phase, the function \n verifies which billing items need confirmation. Those that don\u0027t need \n confirmation receive a ..."},"442":{y:0,u:"../Content/modules/billing/invoicing/routine/invoices_change_amounts.htm",l:-1,t:"Invoicing - Invoice.ChangeAmounts",i:4.36103210702897E-05,a:"Invoice.ChangeAmounts This function allows manually changing the invoice item amounts. Also \n all other invoices (of other payers) for the same billing items can be \n changed in the same session. An array editor is opened showing a row for \n each invoice item on the invoice. The first column is the ..."},"443":{y:0,u:"../Content/modules/billing/invoicing/routine/invoices_credit_note_creation.htm",l:-1,t:"Invoicing - Invoice.CreditNoteCreation",i:0.000136282325727349,a:"Invoice.CreditNoteCreation This function completely credits a debit invoice by creating a credit invoice containing all the invoice items of the original invoice (using the invoice item\u0027s \u0027CreditNote\u0027 field). Place credit note on an invoice summary: if set, the credit note will automatically be ..."},"444":{y:0,u:"../Content/modules/billing/invoicing/routine/invoices_deassign_from_invoice_summary.htm",l:-1,t:"Invoicing - Invoice.DeassignFromInvoiceSummary",i:4.36103210702897E-05,a:"Invoice.DeassignFromInvoiceSummary This function allows removing the invoice from an invoice summary. The invoice summary amounts are automatically corrected. The method fails if the invoice was already fixed, unless it is explicitly requested to downgrade the invoice status first.  If requested ..."},"445":{y:0,u:"../Content/modules/billing/invoicing/routine/invoices_invoice_summary_creation.htm",l:-1,t:"Invoicing - Invoice.InvoiceSummaryCreation",i:0.00113791539059423,a:"Invoice.InvoiceSummaryCreation This function allows grouping  invoices  on  invoice summaries .  In practice, an invoice summary will be created per payer and possibly per period. Invoice summaries for the national health service (Belgium: mutualiteit) are generally created per fund and per month. ..."},"446":{y:0,u:"../Content/modules/billing/invoicing/routine/invoices_print.htm",l:-1,t:"Invoicing - Invoice.Print",i:8.65347456728072E-05,a:"Invoice.Print Introduction From each invoice record, you can use the Print function. Note You can create a command with an invoice query in combination with the Invoice.Print function to automate this process. Fields Billing document template  Select a  billing document template  of type Invoice. To ..."},"447":{y:0,u:"../Content/modules/billing/invoicing/routine/invoice_summaries.htm",l:-1,t:"Invoicing - Invoice summaries",i:0.000587924663747379,a:"Invoicing: Invoice summaries Introduction An invoice summary in GLIMS is the actual document that is sent to a customer (fund, patient, ..) with a friendly request to pay: so the \u0027invoice summary\u0027 plays the role of the \u0027real world\u0027 invoice. Invoice summaries always consist of one or several invoices ..."},"448":{y:0,u:"../Content/modules/billing/invoicing/routine/invoice_summaries_clean_or_credit.htm",l:-1,t:"Invoicing - InvoiceSummary.CleanOrCredit",i:9.92135238645252E-05,a:"InvoiceSummary.CleanOrCredit This function credits (or deletes) invoices of the selected invoice summaries. It will make credit invoices (or delete the invoices) and will downgrade the Order set(s) status so that re-tariffication is possible. Optionally a browser, with associated orders or order ..."},"449":{y:0,u:"../Content/modules/billing/invoicing/routine/invoice_summaries_place_on_financial_shipment.htm",l:-1,t:"Invoicing - InvoiceSummary.PlaceOnFinancialShipment",i:0.000606485770530384,a:"InvoiceSummary.PlaceOnFinancialShipment Contents:  Introduction  -  Fields Introduction This function allows to gather  invoice summaries  on a  financial shipment , which is used to send financial data to external systems or to official departments (Belgian RIZIV files, German KVDT files, HL7 ..."},"450":{y:0,u:"../Content/modules/billing/invoicing/routine/invoice_summaries_print.htm",l:-1,t:"Invoicing - InvoiceSummary.Print",i:9.85274106146673E-05,a:"InvoiceSummary.Print Introduction From each invoice summary record, you can use the Print function.  Note You can create a command with an invoice summary query in combination with the InvoiceSummary.Print function to automate this process. Fields Billing document template  Select a  billing ..."},"451":{y:0,u:"../Content/modules/billing/invoicing/routine/invoice_summaries_rebalance.htm",l:-1,t:"Invoicing - InvoiceSummary.Rebalance",i:4.36103210702897E-05,a:"InvoiceSummary.Rebalance This function moves the payment (balance record) of a credited invoice summary to the new invoice summary version.  The original invoice summary must be invoice-specific and fully credited. This function makes the reminder follow-up easier but is only useful for sites with ..."},"452":{y:0,u:"../Content/modules/billing/invoicing/routine/financial_shipments.htm",l:-1,t:"Invoicing - Financial shipments",i:0.00115497221525538,a:"Invoicing: Financial shipments Contents:  Introduction  -  Fields Introduction Financial shipments are used to send financial data to external systems or to official departments (Belgian RIZIV files, German KVDT files, HL7 financial, HPRIM financial, external accounting applications etc.). Financial ..."},"453":{y:0,u:"../Content/modules/billing/invoicing/routine/financial_shipments_print.htm",l:-1,t:"Invoicing - FinancialShipment.Print",i:6.80003447413954E-05,a:"FinancialShipment.Print Introduction From each financial shipment record, you can use the Print function. This allows printing all underlying invoice summaries and invoices.  Note You can create a command with a financial shipment query in combination with the FinancialShipment.Print function to ..."},"454":{y:0,u:"../Content/modules/billing/invoicing/routine/financial_shipments_send.htm",l:-1,t:"Invoicing - FinancialShipment.Send",i:0.00718095815682914,a:"FinancialShipment.Send Financial shipments  can then be sent to an external system or to official departments (Belgian RIZIV files, German KVDT files, HL7 financial, HPRIM financial, external accounting applications etc.). with the contextual menu function \u0027Send\u0027. Supported protocols:  HL7 DFT , ..."},"455":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/acc_tf.htm",l:-1,t:"Acc TF",i:0.000892415335753097,a:"FinancialShipment.Send  \n -\u003e Acc TF Inhoud:  Inleiding  -  Configuratie  \n -  Aanvraagnummer  -  Urgenties  \n -  Remgeld  -  Bestandsstructuur Inleiding De GLIMS functie  FinancialShipment.Send  \n laat toe om een verrekenbestand te genereren volgens de ACC TF (CS400) \n layout, versie 2.5.4 (België) ..."},"456":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/c_page.htm",l:-1,t:"C Page",i:0.000892415335753097,a:"FinancialShipment.Send -\u003e C-Page Contents:  Introduction  -  Identifications  -  Remarks  -  Routine  -  Message layout Introduction Using the  FinancialShipment.Send  function and selecting \"C-Page\" as protocol, GLIMS allows creating files conform \"C-Page \u0027Facturation des actes\u0027 version ..."},"457":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/exact.htm",l:-1,t:"exact",i:0.000956882869597035,a:"FinancialShipment.Send  -\u003e Exact Inhoud:  Inleiding  -  Configuratie  -  Routine Inleiding De GLIMS functie  FinancialShipment.Send  laat toe om een verrekenbestand te genereren dat ingelezen dan worden in het boekhoud-pakket ”r;Exact” of ”r;Globe 2000”. Configuratie Het aanmaken van een EXACT ..."},"458":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/hl7_dft/hl7dft.html",l:-1,t:"DFT",i:0.000535912889794633,a:"HL7 DFT Contents:  Introduction  -  Online communication  -  Message layout Introduction \nGLIMS supports HL7 DFT ’r;P03’ (post financial transaction) events.  Currently HL7 version 2.2 and version 2.4 can be used.  Using the  FinancialShipment.Send  function and selecting \"HL7\" as protocol, GLIMS ..."},"459":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/hprim_fac.htm",l:-1,t:"HPRIM Facturation",i:0.000647346400018982,a:"Contents:  Introduction  -  Customize with MISPL  -  Identifications  -  Routine  -  Message layout  -  Example file Introduction Using the  FinancialShipment.Send  function and selecting \"HPRIM Facturation\" as protocol, GLIMS allows creating files conform \"HPRIM Message données de facturation ..."},"460":{y:0,u:"../Content/modules/billing/country_specific/Germany/kvdt/billing_01.htm",l:-1,t:"Index page",i:0.000513136478450127,a:"KV-DT Implementation Documentation Invoice series KT import KV Specifika files MISPL functions Order based MISPL functions Referral General Creating the KV-DT tape Implemented fields Used site attributes Identifications"},"461":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/pad.htm",l:-1,t:"pad",i:0.000956882869597034,a:"PAD Contents:  Introduction  -  Message layout  - Invoice document numbering  -  Begleitzettel  -  GLIMS mapping Introduction By means of the  FinancialShipment.Send  function, GLIMS supports the billing export \u0027PrivatAbrechnung mittels Datentraeger\u0027 (PAD).  The FinancialShipment.Send() function ..."},"462":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/sms_fac.htm",l:-1,t:"SMS FAC",i:0.000892415335753097,a:"Contents:  Introduction  -  Identifications  -  Routine  -  Output files  -  Message structure  -  Example file Introduction Using the  FinancialShipment.Send  function and selecting \"SMS FAC\" as protocol, GLIMS allows creating files that comply with SMS \u0027Cotation des Actes\u0027 version 8 of 05/11/1998. ..."},"463":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/sepa.htm",l:-1,t:"FinancialShipment.Send -\u003e SEPA",i:4.36103210702897E-05,a:"FinancialShipment.Send  -\u003e SEPA Introduction GLIMS allows exporting financial data in the SEPA format using the  FinancialShipment.Send  function. Note The financial export in the SEPA format requires a license. Configuration The SEPA export requires some additional configuration. A SEPA CDD ..."},"464":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/symphonie.htm",l:-1,t:"symphonie",i:0.000892415335753097,a:"Nemesis de Symphonie Contents:  Introduction  -  Identifications  -  Urgencies  -  File structure Introduction Using the  FinancialShipment.Send  function and selecting \"Symphonie\" as protocol, GLIMS allows creating files conform the \"Nemesis de Symphonie\" format.  Before transferring billing data, ..."},"465":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/triple_p.htm",l:-1,t:"Triple P",i:0.000892415335753097,a:"  FinancialShipment.Send  \n -\u003e Triple P Inhoud:  Inleiding  -  Configuratie  \n -  Remgeld  -  Opmerkingen  \n -  Bestandsstructuur  -  Lijst van mogelijke foutcodes Inleiding De GLIMS functie  FinancialShipment.Send  \n laat toe om een verrekenbestand te genereren volgens de Triple P layout. Wanneer ..."},"466":{y:0,u:"../Content/modules/billing/invoicing/routine/export_formats/ucm_xml.htm",l:-1,t:"Financial export in \"UCM XML\" format",i:0.000145549526193055,a:"Introduction GLIMS allows  exporting financial data  in the UCM XML format to CNS Luxembourg. File check If this option is disabled, then all data validity checks are disabled. The number of unreported errors is mentioned in the logging. The file is created irrespective of these errors. Delete temp ..."},"467":{y:0,u:"../Content/modules/billing/invoicing/configuration/billing_document_templates.htm",l:-1,t:"Invoicing - Billing document templates",i:0.000399333500850014,a:"Invoicing: Billing document templates Contents:  Introduction  -  Fields  \n -  Examples Introduction The most important parameter when printing a billing document is the \n ‘billing document template’. \n This template determines the layout of the printed document.  It \n can be specified in the ..."},"468":{y:0,u:"../Content/modules/billing/invoicing/routine/billing_documents_numbering_status.htm",l:-1,t:"Invoicing: Billing document \n numbering and status handling",i:5.56029860121498E-05,a:"Invoice summaries and other billing documents have a document number \n that is calculated with the document numbering MISPL functions specified \n in the specific site screen. All billing documents also have a status which indicates if the document \n already has an identification number (status ..."},"469":{y:0,u:"../Content/modules/billing/invoicing/routine/rejections_import.htm",l:-1,t:"Invoicing - Import rejections",i:8.06791229331134E-05,a:"Invoicing: Import rejections Introduction GLIMS allows automatic crediting of tariffed orders. This program \n is available from the main menu via Start \u003e Billing \u003e Import rejections. The program performs an automatic crediting of tariffed orders by importing \n a rejection file (which is the result ..."},"470":{y:0,u:"../Content/modules/billing/payments/payment_agreements.htm",l:-1,t:"Payment agreements",i:0.000123146200244168,a:"Introduction Each payment agreement represents an agreement (policy name) which can be used to tariff an order (set). The payment agreement editor looks as follows: The fields are described in the  database manual . Correspondent specific agreement If the agreement is only applicable for a specific ..."},"471":{y:0,u:"../Content/modules/billing/payments/payments_entry.htm",l:-1,t:"Payment entry",i:0.000134077999641495,a:"Next to the payment import program, GLIMS offers two other ways to register \n payments: via the payment entry program or via the quick invoice program. Via the payment entry program The manual payment entry program is available from the main menu via \n Start -\u003e Billing -\u003e Payments -\u003e By internal Id ..."},"472":{y:0,u:"../Content/modules/billing/payments/payments_import.htm",l:-1,t:"Payment import",i:0.000647955135572345,a:"The payment import program is available from the main menu via Start -\u003e Billing -\u003e Payments -\u003e Import payments file. Avoid importing same payment file twice The payment import program will produce a warning when importing an already imported payment file again.  When importing a file interactively, ..."},"473":{y:0,u:"../Content/modules/billing/payments/payments_refund.htm",l:-1,t:"Payment.Refund",i:4.36103210702897E-05,a:"If a party has paid too much (or paid the invoice twice), you can register \n a refund in Glims by using the menu function \"Refund\" on the \n concerned payment.  The function proposes to refund the remaining (unbalanced) amount: before \n saving, the user can change the amount, payment type of date. ..."},"474":{y:0,u:"../Content/modules/billing/payments/import_formats/bvb_i5.htm",l:-1,t:"BVB I5",i:7.58440879922584E-05,a:"Payment import  -\u003e BVB I.5 Contents:  Introduction  -  GLIMS mapping Introduction The payment import program in GLIMS allows to import payment files according to the BVB I.5 format.  Click here for a  PDF document describing the BVB protocol . BVB I.5 file type ome Belgian customers (having a KBC ..."},"475":{y:0,u:"../Content/modules/billing/payments/import_formats/csv_control_file.htm",l:-1,t:"Payment import in \"CSV control\" format (Germany)",i:6.21447220017015E-05,a:"Introduction GLIMS supports  importing payments  in the CSV control (Steuerdatei) format. Note Specifying the Bank and Firm is optional. If specified, they will only be used if no bank or firm could be derived from the bank account. Warning The payment import in the CSV control format can only be ..."},"476":{y:0,u:"../Content/modules/billing/payments/import_formats/hprim_reglement.htm",l:-1,t:"HPRIM Règlement",i:6.08516311893711E-05,a:"Payment import  -\u003e HPRIM Règlement Contents:  Introduction  -  Mapping     Introduction The GLIMS payment import \n program allows importing payment files in HPRIM Règlement format.  \n The payments in the imported files will be registered \n by Glims as payments.  The payments of one received file are ..."},});