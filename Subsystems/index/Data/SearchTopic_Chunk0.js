define({"0":{y:0,u:"../Content/Watchdog/Watchdog_about.htm",l:-1,t:"About Watchdog",i:0.0829007686488109,a:"Watchdog is a background \n\t program that monitors the connection status of services and translators, \n\t available disk space, etc. It is  installed \n\t on the server  running the application you monitor. This information is \n\t further broadcasted to a  dashboard  \n\t for visualization on client ..."},"1":{y:0,u:"../Content/Watchdog/Watchdog_installation_configuration.htm",l:-1,t:"Watchdog setup",i:0.0190901972926671,a:"Watchdog installation and configuration Watchdog installation Define \n\t the XML control service Register \n\t the Watchdog service/daemon Start the \n\t Watchdog service/daemon Stop the \n\t Watchdog service/daemon Unregister \n\t the Watchdog service/daemon Watchdog \n\t in a multi-server environment"},"2":{y:0,u:"../Content/Watchdog/Watchdog_installation.htm",l:-1,t:"Watchdog installation",i:0.00704569873332874,a:"Install and prepare Watchdog Installing Watchdog Watchdog is automatically installed along with the application. Java Watchdog uses the Java version shipped with the application."},"3":{y:0,u:"../Content/Watchdog/Watchdog_XML_control_service.htm",l:-1,t:"Defining the Watchdog XML control service",i:0.0534840484712569,a:"Define the XML control service When configuring Watchdog for the first time, you need \n to: Define an XML control \n\t service (see below). Register \n\t Watchdog . Start \n\t Watchdog . Define an XML control service An XML control service is required to: start /stop services and translators from \n\t ..."},"4":{y:0,u:"../Content/Watchdog/Watchdog_register.htm",l:-1,t:"Registering Watchdog",i:0.0583855165578488,a:"Registering the Watchdog service/daemon When configuring  Watchdog  \n for the first time, you need to: Define \n\t an XML control service . Register Watchdog (see below). Start \n\t Watchdog . Register the Watchdog service/daemon To register Watchdog: Go to the Register \n\t window (System Management \u003e ..."},"5":{y:0,u:"../Content/Watchdog/Watchdog_start.htm",l:-1,t:"Starting Watchdog",i:0.121030878970945,a:"Starting the Watchdog service/daemon When configuring  Watchdog  \n for the first time, you need to: Define \n\t an XML control service . Register \n\t Watchdog . Start Watchdog (see below). Start the Watchdog service The Watchdog service will be started along with other services \n on the system. You ..."},"6":{y:0,u:"../Content/Watchdog/Watchdog_stop.htm",l:-1,t:"Stopping Watchdog",i:0.0173350789715842,a:"The  Watchdog  service will be stopped along with other services on the system. If you need to manually stop the Watchdog service: From the main menu, choose System management -\u003e Services -\u003e Watchdog -\u003e Stop This will stop Watchdog (without confirmation window) independently of the other services."},"7":{y:0,u:"../Content/Watchdog/Watchdog_unregister.htm",l:-1,t:"Unregistering Watchdog",i:0.00704569873332874,a:"To unregister the  Watchdog  \n service: From the main menu, choose System management -\u003e Services -\u003e Watchdog -\u003e Unregister \tThe service will be unregistered (without confirmation). Make sure to unregister the service on the appropriate \n server  (see also  Watchdog \n in a multi-server environment ) ..."},"8":{y:0,u:"../Content/Watchdog/Watchdog_in_a_multi-server_environment.htm",l:-1,t:"Watchdog in a multi-server environment",i:0.0420122174025166,a:"This document describes the recommended way to setup the application and Watchdog \n in a multi-server environment, where the Translator server and Task scheduler \n services are spread among multiple servers. Preparation For the remainder of this document, we will assume there are 3 application \n ..."},"9":{y:0,u:"../Content/Watchdog/Watchdog_notifications.htm",l:-1,t:"Watchdog notifications",i:0.0561094903302624,a:"Notification info Watchdog  can send notifications \n about: The status of services The status of translators The status of task schedulers (if enabled \n\t in the  Start Watchdog  window) Quality control issues (if enabled in \n\t the  Start Watchdog  window) The databases The FTP server Server disk ..."},"10":{y:0,u:"../Content/Watchdog/Watchdog_nagios_integration.htm",l:-1,t:"Watchdog - Nagios integration",i:0.0375264275454064,a:"Introduction Watchdog is the MIPS product aimed at monitoring communication between \n the MIPS applications and analysers (Translators and Translator servers), \n as well as background task execution (Task schedulers). Nagios is a more general free / open source software project which aims \n to ..."},"11":{y:0,u:"../Content/Dashboard/Dashboard_about.htm",l:-1,t:"About Dashboard",i:0.0335079570667476,a:"The dashboard is the \n\t visible part of  Watchdog  \n\t and connects to it. The dashboard cannot \n\t function without Watchdog being active (see  Watchdog \n\t installation and configuration ). The dashboard displays information about: The status of services The status of translators The status of task ..."},"12":{y:0,u:"../Content/Dashboard/Dashboard_start.htm",l:-1,t:"Starting Dashboard",i:0.020801484275276,a:"From the application Access The Dashboard can be opened from within the application: from the application\u0027s Main menu, via System management -\u003e Services -\u003e Watchdog -\u003e Dashboard. Application to be monitored When opening the Dashboard from within the application, it goes without saying that Dashboard ..."},"13":{y:0,u:"../Content/Dashboard/Dashboard_window_elements.htm",l:-1,t:"Dashboard - Window elements",i:0.0322205947918725,a:"Hamburger menu The hamburger menu is located in the top left corner of the screen. The user can pick the following items: Preferences Allows to set  preferences  for the Dashboard application. About Dashboard Shows information about the Dashboard application. Exit Dashboard Allows to exit the ..."},"14":{y:0,u:"../Content/Dashboard/Dashboard_area_communication.htm",l:-1,t:"Dashboard - Communication area",i:0.0141143563412325,a:"Filter panel Collapse / Expand The Filter panel can be collapsed / expanded with the Arrow icon. Search The Text Search filter is applied to all items in the Main panel. View Active Only If enabled, inactive items will be hidden in the Main panel. Filter by Group The Filter by Group option is ..."},"15":{y:0,u:"../Content/Dashboard/Dashboard_area_task_reports.htm",l:-1,t:"Dashboard - Tasks and Reports area",i:0.0100958858625737,a:"Filter panel Collapse / Expand The Filter panel can be collapsed / expanded with the Arrow icon. Search The Text Search filter is applied to all items in the Main panel. View Active Only If enabled, inactive items will be hidden in the Main panel. Filter by Group The Filter by Group option is ..."},"16":{y:0,u:"../Content/Dashboard/Dashboard_area_system_status.htm",l:-1,t:"Dashboard - System Status area",i:0.019137444439556,a:"Filter panel Collapse / Expand The Filter panel can be collapsed / expanded with the Arrow icon. Search The Text Search filter is applied to all items in the Main panel. View Active Only If enabled, inactive items will be hidden in the Main panel. Main panel Disks Watchdog monitors all disks on the ..."},"17":{y:0,u:"../Content/Dashboard/Dashboard_area_message_log.htm",l:-1,t:"Dashboard - Message Log area",i:0.0218876892806503,a:"Filter panel Collapse / Expand The Filter panel can be collapsed / expanded with the Arrow icon. Search The Text Search filter is applied to all items in the Main panel. Main panel The Main panel provides an overview of all monitoring messages received by Dashboard. \n  Notes  This overview only ..."},"18":{y:0,u:"../Content/Dashboard/Dashboard_area_setup.htm",l:-1,t:"Dashboard - Preferences",i:0.0274351449958094,a:"Dashboard -  Preferences Introduction The   Preferences window  allows to set preferences for the Dashboard application. It is available from the  Hamburger menu . Note The preferences are stored in the watchdog.dashboard.properties file located in Watchdog\u0027s conf directory. Message Expiration For ..."},"19":{y:0,u:"../Content/Release_Notes/62.htm",l:-1,t:"Watchdog release notes v6.2",i:0.00472760236064082,a:"This page uses frames, but your browser doesn\u0027t support them."},"20":{y:0,u:"../Content/Release_Notes/61.htm",l:-1,t:"Watchdog release notes v6.1",i:0.00472760236064082,a:"This page uses frames, but your browser doesn\u0027t support them."},"21":{y:0,u:"../Content/Release_Notes/60.htm",l:-1,t:"Watchdog release notes v6.0",i:0.00472760236064082,a:"This page uses frames, but your browser doesn\u0027t support them."},"22":{y:0,u:"../Content/Watchdog/Watchdog_architecture.htm",l:-1,t:"Watchdog architecture",i:0.0286392808097315,a:"Watchdog architecture Overview Message flows  See also: Watchdog \n\t installation and configuration Watchdog \n\t in a multi-server environment About \n\t the dashboard Watchdog notifications Nagios integration"},"23":{y:0,u:"../Content/Watchdog_Dashboard_logging.htm",l:-1,t:"Watchdog/Dashboard logging",i:0.0370310086499387,a:"Watchdog / Dashboard logging Watchdog daemon Logging options are specified when starting Watchdog When  starting the Watchdog daemon , the settings specified in the Logging tab page will be applied. Logging options are not specified when starting Watchdog When no logging settings are specified when  ..."},"24":{y:0,u:"../Content/Watchdog_Dashboard_troubleshooting.htm",l:-1,t:"Watchdog troubleshooting",i:0.00472760236064082,a:"Watchdog/Dashboard troubleshooting I cannot start/stop a service/translator from the dashboard. Make sure that the Windows user corresponds \n\t to an application user having sufficient privileges to start/stop \n\t services/translators. Make sure you have correctly defined \n\t the  XML control \n\t ..."},"25":{y:0,u:"../Content/Release_Notes/600/WatchDog-00274.htm",l:-1,t:"Release notes v6.0.0 - Start Dashboard from within application (WatchDog-00274)",i:0.00472760236064082,a:"Release notes v6.0.0 - Start Dashboard from within application (WatchDog-00274) The Dashboard can now be  started from within the application ."},"26":{y:0,u:"../Content/Release_Notes/621/WatchDog-00359.htm",l:-1,t:"Release notes v6.2.1 - Trim command-line argument values (WatchDog-00359)",i:0.00472760236064082,a:"An issue was reported where trailing spaces in the named parameters in dashboard.bat would prevent the dashboard from opening or establishing the connection to the daemon. This has been corrected, as leading and trailing spaces are now removed from such parameters."},"27":{y:0,u:"../Content/Release_Notes/610/WatchDog-00336.htm",l:-1,t:"Release notes v6.1.0 - Styling of message windows (WatchDog-00336)",i:0.00472760236064082,a:"Release notes v6.1.0 - Styling of message windows (WatchDog-00336) The confirmation questions and error messages have been restyled."},"28":{y:0,u:"../Content/Release_Notes/620/WatchDog-00194.htm",l:-1,t:"Release notes v6.2.0 - Connections  between Dashboard/NagiosAgent and Daemon (WatchDog-00194)",i:0.00472760236064082,a:"Release notes v6.2.0 - Connections  between Dashboard /NagiosAgent  and Daemon (WatchDog-00194) Watchdog has always communicated via short-lived socket connections. While this is a proven approach for the interaction of faceless processes, it has a number of disadvantages for Watchdog - specifically ..."},"29":{y:0,u:"../Content/Release_Notes/600/WatchDog-00254.htm",l:-1,t:"Release notes v6.0.0 - User login for Dashboard (WatchDog-00254)",i:0.00472760236064082,a:"Release notes v6.0.0 - User login for Dashboard (WatchDog-00254) For security reasons, it is now required that users log in when  starting Dashboard ."},"30":{y:0,u:"../Content/Release_Notes/601/WatchDog-00305.htm",l:-1,t:"Release notes v6.0.1 - Issue with \"Last message\" text (WatchDog-00305)",i:0.00472760236064082,a:"An issue was detected in Dashboard where the user could not always collapse the [Communication Engines], [Task Schedulers] and [Report Builders] panels in the grid, because their \u0027last message\u0027 text overran the available space. This has been corrected."},"31":{y:0,u:"../Content/Release_Notes/610/WatchDog-00333.htm",l:-1,t:"Release notes v6.1.0 - Notification popup window stacking (WatchDog-00333)",i:0.00472760236064082,a:"Release notes v6.1.0 - Notification popup window stacking (WatchDog-00333) An issue was reported where notification popup windows would overlap instead of being neatly stacked one above the other. This has been corrected."},"32":{y:0,u:"../Content/Release_Notes/622/WatchDog-00363.htm",l:-1,t:"Release notes v6.2.2 - Fix issue with popup close interval preferences (WatchDog-00363)",i:0.00472760236064082,a:"An issue was detected with the dashboard Information/Warning/Alert/Error Pop-Up perefences, which were correctly stored in the properties file, but incorrectly read from the file - but only if the interval was set to \u0027Display and close after 1 minute\u0027 This has been corrected."},"33":{y:0,u:"../Content/Release_Notes/602/WatchDog-00323.htm",l:-1,t:"Release notes v6.0.2 - Improvement for database monitoring (WatchDog-00323)",i:0.00472760236064082,a:"An issue was reported where stopping the application database left the corresponding model item in the  System Status  tab of the Watchdog Dashboard green - this implied that users would remain unaware of the infrastructural issue for longer than needed. Hence it was decided to change the status of ..."},"34":{y:0,u:"../Content/Release_Notes/601/WatchDog-00311.htm",l:-1,t:"Release notes v6.0.1 - Issue when closing Dashboard (WatchDog-00311)",i:0.00472760236064082,a:"An issue was detected where the Dashboard could not be closed while connecting to the Daemon. When one of the Service Discovery / Login Credentials / Connection Progress panels is open, the Dashboard ignores the user clicking the Cancel button or attempting to close the application via the Close ..."},"35":{y:0,u:"../Content/Release_Notes/603/WatchDog-00328.htm",l:-1,t:"Release notes v6.0.3 - Memory leak in Watchdog Daemon (WatchDog-00328)",i:0.00472760236064082,a:"An issue was reported where an error in the socket communication when sending a message from Watchdog Daemon to a Dashboard could lead to a memory leak in Watchdog Daemon that could only be resolved by restarting Watchdog. This has been corrected."},"36":{y:0,u:"../Content/Release_Notes/610/WatchDog-00317.htm",l:-1,t:"Release notes v6.1.0 - Extend Service Controller interaction timeout (WatchDog-00317)",i:0.00472760236064082,a:"When a user requests that Watchdog starts or stops an application supportive process (i.e. Service, Translator or Queue processor), the application\u0027s Control Service may take slightly over a minute to complete the request - either successfully or not. Unfortunately, Watchdog would report an error if ..."},"37":{y:0,u:"../Content/Release_Notes/601/WatchDog-00299.htm",l:-1,t:"Release notes v6.0.1 - Dashboard preferences not stored (WatchDog-00299)",i:0.00472760236064082,a:"As issue was identified where the Dashboard would not store or load the preferences set in the  Setup  area. This has been corrected. Note The preferences are stored in the watchdog.dashboard.properties file located in Watchdog\u0027s conf directory."},"38":{y:0,u:"../Content/Release_Notes/600/WatchDog-00229.htm",l:-1,t:"Release notes v6.0.0 - Daemon should accept Stop as first message (WatchDog-00229)",i:0.00472760236064082,a:"An issue was identified where WatchDog Daemon could end up in a \u0027limbo\u0027 state during startup, where it would wait for the application to send the model overview message but would not accept stop requests. As a consequence, system managers had to manually kill the process. This has been corrected, ..."},"39":{y:0,u:"../Content/Release_Notes/600/WatchDog-00174.htm",l:-1,t:"Release notes v6.0.0 - Respect logging settings in Start Watchdog (WatchDog-00174)",i:0.00472760236064082,a:"Release notes v6.0.0 - Respect logging settings in Start Watchdog (WatchDog-00174) The  Logging  settings specified when  starting the Watchdog service  are now taken into account."},"40":{y:0,u:"../Content/Release_Notes/601/WatchDog-00293.htm",l:-1,t:"Release notes v6.0.1 - Error in Dashboard log file (WatchDog-00293)",i:0.00472760236064082,a:"Release notes v6.0.1 - Error in Dashboard log file (WatchDog-00293) An issue was identified where the Dashboard would incorrectly write an ERROR in its log file if a Queue processor was defined in the database but in status Inactive. This has been corrected."},"41":{y:0,u:"../Content/Release_Notes/601/WatchDog-00303.htm",l:-1,t:"Release notes v6.0.1 - Translation issue in Message log area (WatchDog-00303)",i:0.00472760236064082,a:"Release notes v6.0.1 - Translation issue in Message log area (WatchDog-00303) An issue was identified where the Message Log table placeholder text (displayed when the table is empty) was not translated, and was always displayed in English (\"No content in table\"). This has been corrected."},"42":{y:0,u:"../Content/Release_Notes/610/WatchDog-00332.htm",l:-1,t:"Release notes v6.1.0 - Display of Service Controllers in Dashboard (WatchDog-00332)",i:0.00472760236064082,a:"Watchdog Dashboard now includes services of type Service controller in the  System Status  tab in order to provide a more complete overview of the application supportive processes. Note Unlike other types of services, you cannot start or stop services of type Service controller from the Watchdog ..."},"43":{y:0,u:"../Content/Release_Notes/603/WatchDog-00330.htm",l:-1,t:"Release notes v6.0.3 - Exceptions in log file without timestamp (WatchDog-00330)",i:0.00472760236064082,a:"An issue was reported where Watchdog Daemon would output exceptions to the log file without timestamp in case of errors during tcp/ip socket communication. The same exceptions were already properly logged in the regular log file with timestamp, leading to confusion as to whether they were properly ..."},"44":{y:0,u:"../Content/Release_Notes/600/WatchDog-00241.htm",l:-1,t:"Release notes v6.0.0 - WatchdogDaemon - ServiceController interaction (WatchDog-00241)",i:0.00472760236064082,a:"An issue was reported where a timeout in the execution of a Start/Stop request from the Watchdog Dashboard could lead to a cascade of alerts that services might be disconnected, although they were regularly sending their \u0027Alive\u0027 messages. The underlying cause was that while Watchdog Daemon was ..."},"45":{y:0,u:"../Content/Release_Notes/600/WatchDog-00247.htm",l:-1,t:"Release notes v6.0.0 - Incorrect check of available disk space (WatchDog-00247)",i:0.00472760236064082,a:"Release notes v6.0.0 - Incorrect check of available disk space (WatchDog-00247) An issue was identified where disk monitoring calculated the available space incorrectly, and thus did not notify system managers immediately when the available disk space dropped under 200 MB. This has been corrected."},"46":{y:0,u:"../Content/Release_Notes/620/WatchDog-00347.htm",l:-1,t:"Release notes v6.2.0 - Confirmation dialog when closing Dashboard (WatchDog-00347)",i:0.00472760236064082,a:"Release notes v6.2.0 - Confirmation dialog when closing Dashboard (WatchDog-00347) An issue was identified where the Dashboard would not always ask the user for confirmation when attempting to close the window. This has been corrected."},"47":{y:0,u:"../Content/Release_Notes/610/WatchDog-00335.htm",l:-1,t:"Release notes v6.1.0 - Issue on multi-homed servers (WatchDog-00335)",i:0.00472760236064082,a:"During tests with the application and Watchdog on a multi-homed server (i.e. one with multiple network interfaces) an issue was identified where the Watchdog daemon could refuse to accept connections when option \u0027Zeroconf bind\u0027 was set to \u0027All\u0027. This has been corrected."},"48":{y:0,u:"../Content/Release_Notes/610/WatchDog-00316.htm",l:-1,t:"Release notes v6.1.0 - Extend Service Controller  threshold for Undetermined status (WatchDog-00316)",i:0.00472760236064082,a:"Services of type Service Controller are expected to send a \u0027ServiceControllerAlive\u0027  message to Watchdog Daemon every 10 seconds. Watchdog Daemon regularly checks that it has not timed out, and if the Daemon hasn\u0027t received an alive message in over a minute, the status is changed to Undetermined. ..."},"49":{y:0,u:"../Content/Release_Notes/620/WatchDog-00259.htm",l:-1,t:"Release notes v6.2.0 - Introduction of Hamburger menu (WatchDog-00259)",i:0.00472760236064082,a:"Release notes v6.2.0 - Introduction of Hamburger menu (WatchDog-00259) Watchdog Dashboard now sports a  \u0027Hamburger\u0027 menu , where the user can pick the following items: Preferences About Dashboard Exit Dashboard"},"50":{y:0,u:"../Content/Release_Notes/601/WatchDog-00286.htm",l:-1,t:"Release notes v6.0.1 - Display Filter description above grid (WatchDog-00286)",i:0.00472760236064082,a:"Each of the following tabs in the Dashboard have a filter panel: Communication Tasks and Reports System Status Message Log It was remarked that the user may not realize that a filter is active when the filter side panel is collapsed. Hence it was decided to display a filter description above the ..."},"51":{y:0,u:"../Content/Release_Notes/620/WatchDog-00279.htm",l:-1,t:"Release notes v6.2.0 - Restyled user interface (WatchDog-00279)",i:0.00472760236064082,a:"Release notes v6.2.0 - Restyled user interface (WatchDog-00279) The Dashboard user interface has been completely restyled."},"52":{y:0,u:"../Content/Release_Notes/600/WatchDog-00266.htm",l:-1,t:"Release notes v6.0.0 - Revised Service Discovery mechanism (WatchDog-00266)",i:0.00472760236064082,a:"Release notes v6.0.0 - Revised Service Discovery mechanism (WatchDog-00266) The Service Discovery mechanism used when  starting the Dashboard from outside the application  has been revised."},"53":{y:0,u:"../Content/Release_Notes/600/WatchDog-00270.htm",l:-1,t:"Release notes v6.0.0 - Extended disk monitoring (WatchDog-00270)",i:0.00472760236064082,a:"Disk monitoring  has been revised as follows: All server disks are now monitored When  starting Watchdog , you can specify a Disk space warning threshold and Disk space alert threshold.  If the available disk space drops below these thresholds: A  notification  will be issued."},"54":{y:0,u:"../Content/Release_Notes/62_index.htm",l:-1,t:"Release notes 6.2",i:0.00673683759997022,a:"Release notes 6.2"},"55":{y:0,u:"../Content/Release_Notes/621/WatchDog-00358.htm",l:-1,t:"Release notes v6.2.1 - Support for transient database connections (WatchDog-00358)",i:0.00472760236064082,a:"The ADM Archive database is not always connected, as it should only be connected when it\u0027s actually used. However, it still needs to be monitored by Watchdog. This change adds support for such transient database connections. "},"56":{y:0,u:"../Content/Release_Notes/602/WatchDog-00321.htm",l:-1,t:"Release notes v6.0.2 - Correction for Watchdog daemon monitoring (WatchDog-00321)",i:0.00472760236064082,a:"An issue was detected where Dashboard no longer detected that the backing WatchdogDaemon had timed out (i.e. no message was received in the last two minutes). This has been corrected. Dashboard now detects that the Daemon has timed out, displays a proper error message to the user, and closes itself ..."},"57":{y:0,u:"../Content/Release_Notes/601/WatchDog-00297.htm",l:-1,t:"Release notes v6.0.1 - Issue with Port field in Connection window (WatchDog-00297)",i:0.00472760236064082,a:"Release notes v6.0.1 - Issue with Port field in Connection window (WatchDog-00297) An issue was identified where the Port field in the  Connection  window only allowed users to add digits, but not remove any of the content. This has been corrected."},"58":{y:0,u:"../Content/Release_Notes/610/WatchDog-00331.htm",l:-1,t:"Release notes v6.1.0 - Fix dashboard group filtering (WatchDog-00331)",i:0.00472760236064082,a:"Release notes v6.1.0 - Fix dashboard group filtering (WatchDog-00331) An issue was reported where  filtering via the group  check box tree view did not always work as specified - depending on which check box was clicked. This has been corrected."},"59":{y:0,u:"../Content/Release_Notes/602/WatchDog-00319.htm",l:-1,t:"Release notes v6.0.2 - Default watchdog.dashboard.properties file (WatchDog-00319)",i:0.00472760236064082,a:"An issue was reported where the Watchdog Dashboard properties file (conf/Watchdog.dashboard.properties) was not properly converted from Watchdog 5 to Watchdog 6. In addition, the example file contained old settings - some of which were no longer used or revised. This has been corrected: the example ..."},"60":{y:0,u:"../Content/Release_Notes/622/WatchDog-00362.htm",l:-1,t:"Release notes v6.2.2 - Preload Bree fonts (WatchDog-00362)",i:0.00472760236064082,a:"Release notes v6.2.2 - Preload Bree fonts (WatchDog-00362) An issue was reported  where the Watchdog Dashboard titlebar didn\u0027t always use the \u0027Bree\u0027 font as prescribed in the user interface guidelines, even though the font was installed correctly. This has been corrected."},"61":{y:0,u:"../Content/Release_Notes/600/WatchDog-00260.htm",l:-1,t:"Release notes v6.0.0 - Redesigned Dashboard (WatchDog-00260)",i:0.00472760236064082,a:"Release notes v6.0.0 - Redesigned Dashboard (WatchDog-00260) The different Dashboard areas have been redesigned: Communication Tasks and Reports System Status Message Log  "},"62":{y:0,u:"../Content/Release_Notes/61_index.htm",l:-1,t:"Release notes 6.1",i:0.00673683759997022,a:"Release notes 6.1"},"63":{y:0,u:"../Content/Release_Notes/60_index.htm",l:-1,t:"Release notes 6.0",i:0.00673683759997022,a:"Release notes 6.0"},"64":{y:0,u:"../Content/Release_Notes/610/WatchDog-00275.htm",l:-1,t:"Release notes v6.1.0 - Accept multiple incoming connections in Daemon (WatchDog-00275)",i:0.00472760236064082,a:"In previous versions, the Watchdog Daemon main loop only accepted one connection at a time, read the message, and put it on an internal queue for further processing in a separate thread. While this ensured temporal linearity, it constituted a bottleneck for the application processes which wanted to ..."},"65":{y:0,u:"../Content/Release_Notes/600/WatchDog-00253.htm",l:-1,t:"Release notes v6.0.0 - Maximum size of log files (WatchDog-00253)",i:0.00472760236064082,a:"Release notes v6.0.0 - Maximum size of log files (WatchDog-00253) An issue was identified where the default values in the properties files would allow log files to keep growing - up to nearly 10GB. This has been lowered to 1GB."},"66":{y:0,u:"../Content/Release_Notes/610/WatchDog-00334.htm",l:-1,t:"Release notes v6.1.0 - Improved FTP server monitoring (WatchDog-00334)",i:0.00472760236064082,a:"Release notes v6.1.0 - Improved FTP server monitoring (WatchDog-00334) To improve FTP server monitoring, we have adopted the highly-regarded open source library Apache Commons Net and its FTPClient class."},"67":{y:0,u:"../Content/Release_Notes/releasenotes_detail.htm",l:-1,t:"About the release notes",i:0.010755308078629,a:"Sorting and filtering Export to MS Excel The Excel icon allows to export the entire release notes table to an MS Excel sheet.  Full PDF document The PDF icon offers a full overview of all release notes (including the detailed description) in a single PDF file. Window resizing You can resize the ..."},"68":{y:0,u:"../Content/Release_Notes/610/WatchDog-00314.htm",l:-1,t:"Release notes v6.1.0 - Windows \n Messenger alerts (WatchDog-00314)",i:0.00472760236064082,a:"Release notes v6.1.0 - Windows \n Messenger alerts (WatchDog-00314) An issue was detected where the  Watchdog Start  option Enable Windows Messenger alerts no longer worked on Windows versions more recent than Windows XP and Windows Server 2003. This has been corrected."},"69":{y:0,u:"../Content/Release_Notes/620/WatchDog-00340.htm",l:-1,t:"Release notes v6.2.0 - Sorting in Message Log area (WatchDog-00340)",i:0.00472760236064082,a:"Release notes v6.2.0 - Sorting in Message Log area (WatchDog-00340) An issue was identified where it was not possible to sort the rows in the  Message Log  table in the Dashboard. This has been corrected, and the user can now sort the rows as expected."},"70":{y:0,u:"../Content/Release_Notes/601/WatchDog-00307.htm",l:-1,t:"Release notes v6.0.1 - Issue with multi-line text in Message Log (WatchDog-00307)",i:0.00472760236064082,a:"An issue was identified where the \u0027Message Log\u0027 grid in the Dashboard would display content with multiple lines in a suboptimal manner. This has been corrected by only displaying the first line of the message content, followed by an ellipsis if more lines are present The user can then select the ..."},"71":{y:0,u:"../Content/Release_Notes/620/WatchDog-00289.htm",l:-1,t:"Release notes v6.2.0 - Support AppServer in NagiosAgent (WatchDog-00289)",i:0.00472760236064082,a:"Release notes v6.2.0 - Support AppServer in NagiosAgent (WatchDog-00289) Watchdog  NagiosAgent  can now \"push\" status information to Nagios \n for Progress OpenEdge Application Servers.  "},});