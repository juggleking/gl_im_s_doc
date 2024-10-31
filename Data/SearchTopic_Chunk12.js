define({"814":{y:0,u:"../Content/modules/report_builder/report_types/result_reports/report_builder_result_reports_microbiology_history.htm",l:-1,t:"Report builder - Result reports: microbiology history",i:8.49435937503165E-05,a:"Report Builder - Result reports: microbiology history Introduction Result reports generated with GLIMS Report Builder can include an \"object microbiology history\".  The data can be printed in a grid, similar to the browser that you see in Object \u003e Microbiology \u003e Isolations. How do I add it to the ..."},"815":{y:0,u:"../Content/modules/report_builder/report_types/result_reports/report_builder_result_reports_email.htm",l:-1,t:"Report builder - Result reports: email",i:8.49435937503165E-05,a:"Report Builder - Result reports: email Result reports generated using GLIMS Report Builder can be  attached to an email , which is sent to the Report Target if the Report Medium is \"E-mail\". This follows the same logic as other non-electronic report generators. The attachment file format depends on ..."},"816":{y:0,u:"../Content/modules/report_builder/report_types/result_reports/report_builder_result_reports_PDF_encryption.htm",l:-1,t:"Report builder - Result reports: PDF encryption",i:8.04272479373244E-05,a:"Report Builder - Result reports: PDF encryption Description Report Builder supports encrypted (password-protected) PDF files as  email attachments . Report medium PDF reports will only be encrypted when they are sent as email attachments.  This implies that the \"Report medium\" option of the \"Default ..."},"817":{y:0,u:"../Content/modules/report_builder/report_types/result_reports/report_builder_result_reports_pdfa_support.htm",l:-1,t:"Report builder - Result reports: PDF/A support",i:0.000395887193242985,a:"Report Builder - Result reports: PDF/A support Introduction PDF/A-1 is an ISO-standardized variant of the Adobe Portable Document \n Format file specification, specifically designed for long-term archival \n of electronic documents. It initially comes in two variants: PDF/A-1a \n and PDF/A-1b. GLIMS ..."},"818":{y:0,u:"../Content/modules/report_builder/report_types/result_reports/report_builder_result_reports_PDF_signature.htm",l:-1,t:"Report Builder - Result reports: digitally signing  PDF reports via carte CPS",i:0.000129645133569156,a:"Background In some countries (for instance: France), legislation requires PDF reports to be signed digitally (and no longer physically). Functionality PDF reports generated via GLIMS Report Builder can be signed digitally using a smart card. Currently, only carte CPS is supported. Required ..."},"819":{y:0,u:"../Content/modules/report_builder/report_types/result_reports/report_builder_result_reports_file_inclusions.htm",l:-1,t:"Report builder - Result reports: file inclusions",i:8.49435937503165E-05,a:"Report Builder - Result reports: File inclusions Introduction Limited support is available for file inclusions in the \"Content\" MISPL of property classification \"Label\" nodes. The Object.MicrobiologicHistory MISPL function can result in a very long string of character.  Once it reaches the upper ..."},"820":{y:0,u:"../Content/modules/report_builder/report_types/result_reports/report_builder_result_reports_generate.htm",l:-1,t:"Report builder - Result reports: Generate",i:0.000171728241788747,a:"Report Builder - Result reports: Generate Printing reports Report generation screen Make sure the option \"Output to file\" is disabled Specify a printer Make sure that the Windows or Unix path is specified for the selected printer Which printers are supported This is identical to other report ..."},"821":{y:0,u:"../Content/modules/report_builder/report_types/blood_transfusion_form/report_builder_blood_transfusion_form.htm",l:-1,t:"Report builder - Blood transfusion forms",i:0.000228425220297551,a:"Report Builder - Blood transfusion forms Introduction Blood transfusion forms can be exported in an XML format which can be converted to a PDF document using Report Builder. Output options The transfusion form printing screen allows to export the form to XML or PDF. The form can be sent directly to ..."},"822":{y:0,u:"../Content/modules/report_builder/report_types/work_lists/report_builder_work_lists.htm",l:-1,t:"Report builder - Outline work lists",i:8.49435937503165E-05,a:"Report Builder - Outline work lists Introduction GLIMS allows exporting work list outline reports in an XML format which can be converted to a PDF document using Report Builder. New output options The work list printing screen allows to export the report to XML or PDF.  The report can be sent ..."},"823":{y:0,u:"../Content/modules/report_builder/report_types/financial_reports/report_builder_financial_reports.htm",l:-1,t:"Report builder - Financial reports",i:8.49435937503165E-05,a:"Report Builder - Financial reports Introduction GLIMS allows to print invoices, invoice summaries and financial shipments \n via  Report Builder .  This \n functionality is implemented through the \"Print\" function on \n  Invoice , \n  Invoice \n summary  and  Financial \n shipment . Configuration XML ..."},"824":{y:0,u:"../Content/modules/report_builder/tutorials/report_builder_best_practices.htm",l:-1,t:"Report builder - best practices",i:4.36103210702897E-05,a:"This document contains guidelines for creating and maintaining Jasper templates for  Report builder . SUBREPORT_DIR parameter Value On each report, make sure to have a parameter SUBREPORT_DIR holding the value \"./\" (including the double quotes). By default,  will use a static path which may cause ..."},"825":{y:0,u:"../Content/modules/report_builder/tutorials/report_builder_add_fonts_in_PDF.htm",l:-1,t:"Report Builder - How to add fonts in PDF reports",i:0.000407485447702716,a:"Introduction PDF fonts have always been a challenge in JasperReports, as it cannot directly load the TrueType fonts installed on your Windows computer for use in PDF documents. Instead, we have to prepackage them in .jar files and put those on the ‘classpath’ of the Java runtime that creates the PDF ..."},"826":{y:0,u:"../Content/modules/report_builder/tutorials/report_builder_reiber_diagrams.htm",l:-1,t:"Report Builder - Reiber diagrams",i:4.36103210702897E-05,a:"Report Builder - How to implement the three Reiber diagrams The content MISPL definition In order to determine which specific Detail band to trigger, we need a way to differentiate between the three Reiber diagrams: QIgA, QIgM and QIgG. The simplest way is to add it to your XML by adapting your ..."},"827":{y:0,u:"../Content/modules/report_builder/tutorials/report_builder_chart_customizer_properties.htm",l:-1,t:"Report Builder - Chart customizer properties",i:0.000318537366520486,a:"Report Builder - Chart customizer properties  Class: be.mips.reports.chart.ElphoChartCustomizer be.mips.reports.chart.ElphoChartCustomizer.fractionstotop (boolean, default: true)  when this is set to true, the fractions are rendered using a vertical line extending to the top of the chart. when this ..."},"828":{y:0,u:"../Content/modules/report_builder/tutorials/report_builder_missing_data_if_template_field_is_too_small.htm",l:-1,t:"Report Builder - Missing data if template field is too small",i:6.21447220017015E-05,a:"Problem description When designing Report builder templates using Jaspersoft Studio, you can easily \n drag fields onto the layout. It is important to note that the \"Stretch with overflow\" option \n is turned off by default for all fields that you add to the layout. This has as side-effect that if the ..."},"829":{y:0,u:"../Content/modules/report_builder/tutorials/report_builder_raw_print_commands.htm",l:-1,t:"Report Builder - Raw print commands",i:0.0004383038236912,a:"Introduction Labels and Text/PCL reports are traditionally printed by streaming raw printer codes to a file and \u0027copying\u0027 that file to the printer. When GLIMS order handling code was moved from the client session to AppServer, one of the side effects at customer site was that specimen labels weren\u0027t ..."},"830":{y:0,u:"../Content/modules/report_builder/Utilities/report_builder_utilities.htm",l:-1,t:"Report builder - Utilities",i:0.000154816726658761,a:"A number of utilities (helper methods) are available that can be used when customizing the default Jasper templates for Report builder. Image utilities Add TIFF images In order to support the use of single- and multi-page TIFF images on Report builder layouts, two helper methods are available. To ..."},"831":{y:0,u:"../Content/modules/statistics/index_statistics.htm",l:-1,t:"Statistics - Index",i:0.00300986984708639,a:"Statistics Theoretical introduction and considerations"},"832":{y:0,u:"../Content/modules/statistics/statistics_theory.htm",l:-1,t:"theory",i:0.000118857825218422,a:"Theoretical considerations Example 1 Question: \n How many employees are there? Method: \n  Take all employees. Count them. Result: \n 1 number. Example 2 Question: \n What is the average age of the employees? Method: \n  Take all employees. For each employee, \n take the age. Calculate the average. ..."},"833":{y:0,u:"../Content/modules/statistics/common/statistics_interactive.htm",l:-1,t:"Interactive startup",i:0.000118857825218422,a:"Statistics  -\u003e Interactive startup Each module has a separate menu item in the main menu. When launching the statistics program, you will always obtain the settings of the previous time you used it. Setting up all parameters is a process which is managed by a statistics wizard, which guides you ..."},"834":{y:0,u:"../Content/modules/statistics/common/statistics_layout_screen.htm",l:-1,t:"The layout screen",i:0.000611942413826841,a:"Statistics  -\u003e The layout screen: What \n would you like to see in which layout ? Rows \n and columns Multi-level \n row classifications Characteristic \n values Calculation Multiple \n separate tables Row \n and column summaries Advanced \n options Counting \n the number of related items Splitting \n up the ..."},"835":{y:0,u:"../Content/modules/statistics/common/statistics_selection_screen.htm",l:-1,t:"The selection screen",i:0.000118857825218422,a:"Statistics  -\u003e The selection screen: Which records are you (not) interested in ? Example Example screen (result statistics): This screen allows to define a selection of records on which statistics should be performed. One of the main components here is the time period, which is common to all ..."},"836":{y:0,u:"../Content/modules/statistics/common/statistics_output_screen.htm",l:-1,t:"The output options screen",i:0.000937629020262913,a:"Statistics - The output options \n screen Contents:  Introduction  -  Output \n channels  -  Excel  -  Headers  \n -  Markers  -  CSV  -  Additional \n output criteria Introduction The output options screen is identical for all statistic modules. It \n will only be discussed here. Notes If the Clear ..."},"837":{y:0,u:"../Content/modules/statistics/common/statistics_combined.htm",l:-1,t:"Combined statistics",i:0.000666048248250657,a:"Statistics  -\u003e Combined statistics Contents:  Introduction  -  How \n does it work  -  Configuration  -  Notes Introduction The combined statistics concept can be applied to any type of statistics \n in GLIMS.  It is possible to take several pre-defined statistics \n and merge (combine) them into 1 ..."},"838":{y:0,u:"../Content/modules/statistics/common/statistics_commands.htm",l:-1,t:"Running statistics in batch as commands",i:0.000177249941563346,a:"Statistics  -\u003e Running statistics in batch as commands All statistics programs can be run in batch. This has the advantages that: The program runs on the server, not on the client, so that there are more system resources available for the program and it will run faster. The program runs in ..."},"839":{y:0,u:"../Content/modules/statistics/common/statistics_menu.htm",l:-1,t:"Adding menu items",i:0.000137392226149834,a:"Statistics  -\u003e Adding menu items with pre-configured settings  Just as it is possible to make  pre-configured batch commands , it is also possible to make menu-items for statistics with pre-configured settings. This can be useful if the same statistical query - sometimes with slightly different ..."},"840":{y:0,u:"../Content/modules/statistics/common/statistics_reuse.htm",l:-1,t:"Re-use of previously calculated data",i:0.000118857825218422,a:"Statistics  -\u003e Automatic re-use of previously calculated data in statistics programs In all statistics programs (also epidemiology) a feature is included which will often save a lot of time. If the user has run the program and wants to re-run the program with slightly different options, the program ..."},"841":{y:0,u:"../Content/modules/statistics/common/statistics_faq.htm",l:-1,t:"Frequently Asked Questions",i:0.000118857825218422,a:"Statistics  -\u003e Frequently Asked \n Questions I cannot use MISPL in the layout screen - no output to Excel or E-mail For both the activity statistics (order and results statistics) and \n the financial statistics, you need the  Expert \n Upgrade  license to: Use MISPL in the first (layout) screen ..."},"842":{y:0,u:"../Content/modules/statistics/production/index_statistics_production.htm",l:-1,t:"Productions statistics",i:0.000157988467012544,a:"Statistics  -\u003e Production statistics Production statistics give an overview on what has been ordered and produced in the lab during a given period in the past. It consists of the following parts: Result statistics Order statistics Specimen statistics Pathology statistics Carrier statistics They can ..."},"843":{y:0,u:"../Content/modules/statistics/production/statistics_results.htm",l:-1,t:"Results statistics",i:0.00118023872514825,a:"Statistics  -\u003e Result statistics Result statistics give an overview on what has really been done in the lab. It allows to answer questions like: How many analyses were performed on a certain station, or for a certain doctor, by a certain external lab, ...? How many QC-results have been performed? ..."},"844":{y:0,u:"../Content/modules/statistics/production/statistics_orders.htm",l:-1,t:"Order statistics",i:0.000409978432683078,a:"Statistics  -\u003e Order statistics Introduction Order statistics give an overview on what has been ordered by the issuers. \n It allows to answer questions like:  How many orders have been received from a certain \n\t ward, from a certain external lab, ...? For how many patients were orders received ? ..."},"845":{y:0,u:"../Content/modules/statistics/production/statistics_consults.htm",l:-1,t:"Consult statistics",i:0.000447471838447324,a:"Introduction Order statistics  can also be used to draw up statistics on consults (as consult orders are considered to be a special type of orders). This functionality will be available for customers having a license for the  Consult registration  module.  Example It is possible to obtain e.g. the ..."},"846":{y:0,u:"../Content/modules/statistics/production/statistics_carriers.htm",l:-1,t:"Carrier statistics",i:0.000179352427487251,a:"Statistics  -\u003e Carrier statistics \n (Blocks and slides) Contents:  Introduction  -  Layout \n screen  -  Selection screen  -  Output \n options Introduction Beside order, result and pathology statistics, the production statistics \n module also offers an option for statistics on blocks and ..."},"847":{y:0,u:"../Content/modules/statistics/production/statistics_specimens.htm",l:-1,t:"Specimen statistics",i:0.000141239695855034,a:"Layout screen Most classification options from the  Order statistics  are available.  A special option Work status is available as classification.  Possible work statuses are: Specimen Unavailable Result Expected  Including microbiology actions! Result Available  ALL results at least available. ..."},"848":{y:0,u:"../Content/modules/statistics/production/statistics_production_faq.htm",l:-1,t:"Production statistics: FAQ",i:0.000206710781553761,a:"Statistics  -\u003e Production statistics - FAQ How can I get statistics on the result assessment count How can I get statistics about the number of B\u0027s per ward service code How can I make a selection on a certain issuer or several issuers ? How can I get statistics on the result assessment count In the ..."},"849":{y:0,u:"../Content/modules/statistics/financial/index_statistics_financial.htm",l:-1,t:"Financial statistics",i:0.000199680215641283,a:"Statistics  -\u003e Financial statistics Financial statistics give an overview on the turnover of the lab and consist of two parts: Invoice statistics , which are based on the table of invoices Billing item statistics , which are based on the table of billing items Invoice summary statistics , which are ..."},"850":{y:0,u:"../Content/modules/statistics/financial/statistics_billing_items.htm",l:-1,t:"Billing item statistics",i:0.000184214891496083,a:"Statistics  -\u003e Billing item \n statistics The billing item statistics module can be reached via the first screen \n of the invoice statistics by clicking the billing items button on the \n top of the screen. The layout screen Possible characteristics: Possible classification options All order ..."},"851":{y:0,u:"../Content/modules/statistics/financial/statistics_invoice_items.htm",l:-1,t:"Invoice Item Statistics",i:0.000147146089633259,a:"Statistics  -\u003e Invoice Item Statistics The Invoice Item Statistics are part of the financial statistics.  \n Start the financial statistics program (Site -\u003e Statistics \n -\u003e Financial) and select Invoice items from the drop-down \n menu in the first screen. The layout screen Classification options for ..."},"852":{y:0,u:"../Content/modules/statistics/financial/statistics_invoices.htm",l:-1,t:"Invoice Statistics",i:0.000147146089633259,a:"Statistics  -\u003e Invoice statistics These give an overview on what invoices have been made in the lab. It allows to answer questions like: How many invoices were sent to a certain firm ? Which amount ? What was the average invoice amount or VAT ? ... Layout screen Classification options for ..."},"853":{y:0,u:"../Content/modules/statistics/financial/statistics_invoice_summaries.htm",l:-1,t:"Invoice Summary Statistics",i:0.000147146089633259,a:"Statistics  -\u003e Invoice Summary Statistics The Invoice Summary Statistics are part of the financial statistics.  Start the financial statistics program (Site -\u003e Statistics -\u003e Financial) and select Invoice summaries from the drop-down menu in the first screen. The layout screen Classification options ..."},"854":{y:0,u:"../Content/modules/statistics/financial/statistics_payments.htm",l:-1,t:"Payment statistics",i:0.000147146089633259,a:"Introduction The Invoice Payment Statistics are part of the  financial statistics .  Start the financial statistics program (Site -\u003e Statistics -\u003e Financial) and select Payments in the top tight corner of the first screen. Layout screen The layout screen allows defining the row and column ..."},"855":{y:0,u:"../Content/modules/statistics/microbiology/index_statistics_microbiology.htm",l:-1,t:"Microbiology statistics",i:0.000231658544508463,a:"Statistics  -\u003e Microbiology statistics Microbiology statistics give an overview on which microbiology examinations have been performed, which microorganisms have been isolated and which resistance they had against antibiotics. It consists of three parts: Examination statistics , which are based on ..."},"856":{y:0,u:"../Content/modules/statistics/microbiology/statistics_examinations.htm",l:-1,t:"Examination Statistics",i:0.000353686104753336,a:"Statistics  -\u003e Examination Statistics Examination Statistics give an overview on what microbiology procedures \n have been performed in the lab. It allows to answer questions like:  How many actions were performed for a certain procedure, \n for patients of a certain ward, for a certain material or ..."},"857":{y:0,u:"../Content/modules/statistics/microbiology/statistics_isolations.htm",l:-1,t:"Isolation statistics",i:0.000487741324351115,a:"Statistics  -\u003e Isolation statistics Isolation statistics give an overview on what microorganisms have been isolated in the lab. It allows to answer questions like: How many germs (per group) were detected in a certain ward ? How did this number change in time ? Is (was) there an epidemic in (a) ..."},"858":{y:0,u:"../Content/modules/statistics/microbiology/statistics_resistance.htm",l:-1,t:"Resistance statistics",i:0.000236978407135074,a:"Statistics  -\u003e Resistance statistics Contents:  Introduction  -  Layout \n screen  -  Selection screen  -  Output \n examples Introduction Resistance statistics give an overview on the resistance of the isolated \n microorganisms. It allows to answer questions like: What is the average resistance to a ..."},"859":{y:0,u:"../Content/modules/statistics/blood_transfusion/statistics_blood_bags.htm",l:-1,t:"Blood bag statistics",i:0.000163621566491645,a:"Statistics  -\u003e Blood bag statistics Blood bag statistics give detailed information of the amount or the \n characteristics of blood bags in the lab. It allows to answer questions \n like: How many blood bags per department have been processed \n in each month of last year ? How many blood bags per ..."},"860":{y:0,u:"../Content/modules/statistics/blood_transfusion/statistics_blood_selections.htm",l:-1,t:"Blood selection statistics",i:0.000163621566491645,a:"Statistics  -\u003e Blood selection statistics Blood selection statistics give an overview of the amount of blood selections and allows to answer questions as e.g. How many blood selections of a specific blood product are in status reserved ? How many blood selections are there with a minimum urgency ..."},"861":{y:0,u:"../Content/modules/statistics/genetics/index_statistics_genetics.htm",l:-1,t:"Financial statistics",i:4.44929115908331E-05,a:"Genetics statistics Genetics statistics give an overview on the genetic exams of the lab and consist of: Genetic exams statistics, which are based on the table of genetic exams Locus results statistics, which are based on the table of locus results Variant results statistics, which are based on the ..."},"862":{y:0,u:"../Content/modules/statistics/stock_management/statistics_reagent_consumption.htm",l:-1,t:"Reagent consumption statistics",i:4.36103210702897E-05,a:"Introduction The stock management statistics are available from the main menu via \n Start -\u003e Stock management -\u003e Statistics.  They \n allow e.g. to: Analyze the reagent \n\t consumption per property/station|workplace/reagent. Analyze the reagent \n\t cost per property/station|workplace/reagent. Layout ..."},"863":{y:0,u:"../Content/modules/statistics/generic/statistics_generic.htm",l:-1,t:"Statistics - Generic statistics",i:0.000102586640746092,a:"Content:  Introduction  -  Layout \n screen  -  Selection screen  -  Output \n screen Introduction If the built-in statistics modules ( Production , \n  Financial ,  Microbiology  \n and  Blood transfusion  statistics) do \n not allow to produce the required statistics, Glims offers a generic statistics ..."},"864":{y:0,u:"../Content/modules/stock_management/index_stock_management.htm",l:-1,t:"Stock management",i:0.000221764593383509,a:"Introduction Glims offers a fully integrated module for lab stock management. The main features are: Automatic stock monitoring  with warnings and alarms when the stock needs to be replenished. Flexible product ordering screens . Order form generation  by fax, email or on paper. Product check-in ..."},"865":{y:0,u:"../Content/modules/stock_management/configuration/stocks.htm",l:-1,t:"Stock management: Stocks",i:4.89058641935503E-05,a:"Introduction A stock is nothing else than either a logical or physical location where products are stored. Stocks can be structured hierarchically. A stock can be a logical grouping within a laboratory, but it might as well be a building, a room, a refrigerator, a rack... It is the choice of the ..."},"866":{y:0,u:"../Content/modules/stock_management/configuration/suppliers.htm",l:-1,t:"suppliers",i:8.50537356842494E-05,a:"Stock management: Suppliers Introduction Product suppliers must be defined as  correspondents \n of type \"Organization\" . Correspondents will only be considered \n to be suppliers when a Customer no is specified (Organization editor -\u003e Stock management tab). Supplier browser \nThe supplier browser is ..."},"867":{y:0,u:"../Content/modules/stock_management/configuration/product_types.htm",l:-1,t:"product types",i:7.58440879922584E-05,a:"Stock management : Product types Contents:  Introduction  -  Fields Introduction Product types allow dividing stock products into different types. Examples could be reagents, instrument parts etc. Product types can be defined via the main menu through Start -\u003e Stock management -\u003e Configuration -\u003e ..."},"868":{y:0,u:"../Content/modules/stock_management/configuration/product_specifications.htm",l:-1,t:"Stock management: Product specifications",i:0.000828765640503493,a:"Contents:  Introduction  -  Fields  \n -  Browser  -  Query  -  Price \n currency  -  Data sheet Introduction This configuration table allows defining all products that will be processed \n by the stock and order management module. Product specifications \n can be defined via the main menu through Start ..."},"869":{y:0,u:"../Content/modules/stock_management/configuration/product_usage.htm",l:-1,t:"Stock management: Product usage",i:0.000287286928914839,a:"Contents:  Introduction  -  Fields  \n -  Set usage  -  Remark Introduction A \n product usage record links a  product \n specification  to a work place, and determines the minimum and maximum \n stock amounts required for the specific work place. If specified and returning \n a valid number, the fixed ..."},"870":{y:0,u:"../Content/modules/stock_management/configuration/product_lots.htm",l:-1,t:"Stock management: Product lot",i:0.000671181469315682,a:"Contents:  Introduction  -  Fields  \n-  Product lot query and browser  -  Menu functions  -  Creation and update of product, (MB) QC and (MB) reagent lots Introduction Product lots correspond to a supplier identification of products manufactured \n in one batch, so that they can be expected to be ..."},"871":{y:0,u:"../Content/modules/stock_management/configuration/purchase_order_price_validation.htm",l:-1,t:"Stock management: purchase order - price validation",i:4.36103210702897E-05,a:"Setting supplier minimal, maximal purchase order price and validation \n MISPL For each supplier (organization), it is possible to specify a minimal \n and maximal purchase order price as well as a PurchaseOrder-based validation \n MISPL, returning a logical. Optional display of minimal and maximal ..."},"872":{y:0,u:"../Content/modules/stock_management/configuration/stock_management_general_options.htm",l:-1,t:"General options",i:0.000900044381241418,a:"Stock management - General settings Introduction The stock management module can be tailored to the needs of a site using general settings available under  Start -\u003e System management -\u003e Customize \n -\u003e GLIMS Stock management. These general settings are presented below. Fields Options Product \n ..."},"873":{y:0,u:"../Content/modules/stock_management/routine/product_ordering.htm",l:-1,t:"Stock management: Product ordering",i:0.000843885211004318,a:"Contents:  Introduction  -  Purchase \n order entry  -  Product order list  \n -  Order unused products  -  Automated \n product ordering Introduction GLIMS offers different methods for ordering products: The \"Purchase order \n\t entry\" screen This screen allows to order products from a single supplier, ..."},"874":{y:0,u:"../Content/modules/stock_management/routine/order_form.htm",l:-1,t:"Stock management: Order forms",i:0.000366156213083316,a:"Contents:  Introduction  -  Order form generation  -  Send order form  -  Order \n form type and format  -  Order form \n structure and content  -  Remarks Introduction Once you have ordered your products and the purchase order has been \n approved, the stock management module allows generating an ..."},"875":{y:0,u:"../Content/modules/stock_management/routine/product_checkin.htm",l:-1,t:"Stock management: Product check-in",i:0.00140504420179959,a:"Contents:  Introduction  -  Description  -  Check-in \n unused products  -  Check-in \n to substock  -  Processing Introduction The \n\t product check-in screen is used to check in ordered or unsolicited \n\t products for a \n\t specified work place and stock. It is also used as an editor on delivery, \n\t ..."},"876":{y:0,u:"../Content/modules/stock_management/routine/product_checkout.htm",l:-1,t:"Stock management: Product check-out",i:0.000583731797558921,a:"Contents:  Introduction  -  Check-out purpose  - Check-out screen  - Processing Introduction This product \n check-out screen is used to check out delivered products for a specified \n work place and stock. In fact it is more general: it also allows to transfer \n delivered products to another stock ..."},"877":{y:0,u:"../Content/modules/stock_management/routine/product_checkin_checkout_barcode_scanning_advanced.htm",l:-1,t:"Advanced barcode scanning during product check-in and check-out",i:0.000139240850163928,a:"Introduction Glims offers a mechanism to interpret scanned bar codes during product check-in and check-out and automatically set product data. Bar code interpretation Bar code interpretation logic is to be defined in the field Product bar code parser \nof the general options (Start -\u003e System ..."},"878":{y:0,u:"../Content/modules/stock_management/routine/product_specifications_in_use.htm",l:-1,t:"Product specifications in use",i:0.000257433544247248,a:"Content:  Introduction  -  Browser  -  Query  -  Functions  -  Adding a pre-defined menu option / ribbon item Introduction The browser \"Product specifications in use\" can be accessed from the main menu via Start -\u003e Stock management -\u003e Product specifications in use.  When looking up a product ..."},});