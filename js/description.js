export let description = [
    {
        id:'1',
        id_list:'1',
        tagp: `<p>C220-RJOARO-001#show mac gpon onu gpon-onu_0/5/1:4</p>
        <p>Total mac address : 1</p>
              
        <p>Mac address     Vlan id   Type     Port                         Vc     Time</p>
        <p>----------------------------------------------------------------------------</p>
        <p>78da.6e02.d5c0    3005    Dynamic    gpon-onu_0/5/1:4          vport 1   0</p>
        <p>C220-RJOARO-001#<span data-cursor>|</span></p>`
    },
    {
        id:'2',
        id_list:'2',
        tagp: ` <p>C220-RJOARO-001#show mac vlan 3005</p>
        <p>Total mac address : 2</p>
        
        <p>Mac address     Vlan id   Type     Port                         Vc     Time</p>
        <p>----------------------------------------------------------------------------</p>
        <p>b414.89ee.b032    3005    Dynamic    gei_0/14/4                          300		PE</p>				
        <p>78da.6e02.d5c0    3005    Dynamic    gpon-onu_0/5/1:4          vport 1   0			CPE</p>
        <p>C220-RJOARO-001#<span data-cursor>|</span></p>`
    },
    {
        id:'3',
        id_list:'3',
        tagp: `<p>C320-RJOST-001#show gpon onu detail-info gpon-onu_1/1/1:16</p>

        <p>ONU interface:         gpon-onu_1/1/1:16</p>
        <p>  Name:                F621_RJOBQF_016</p>
          <p>  Type:                ZTE-F621</p>
          <p>   State:               ready</p>
          <p>   Admin state:         enable</p>
          <p>  Phase state:         Logging</p>
          <p>  Authentication mode: SN</p>
          <p>  SN Bind:             enable with SN check</p>
          <p>  Serial number:       ZTEGC048397A</p>
          <p>  Password mode:       none</p>
          <p>  Password:</p>
          <p>  Device ID:</p>
          <p>  Description:         16$$F621_RJOBQF_016$$</p>
          <p>  Vport mode:          gemport</p>
          <p>  DBA Mode:            Hybrid</p>
          <p>  ONU Status:          enable</p>
          <p>  OMCI BW Profile:     enable</p>
          <p>  Line Profile:        N/A</p>
          <p>  Service Profile:     N/A</p>
          <p>  Alarm Profile:       N/A</p>
          <p>  Performance Profile: N/A</p>
          <p>  ONU Distance:        134556917m</p>
          <p>  Online Duration:     67h 05m 19s</p>
          <p>  FEC:                 none</p>
        <p>------------------------------------------</p>
        <p>       Authpass Time          OfflineTime             Cause</p>
        <p>   1   2020-04-06 19:24:00    2020-04-09 05:00:21     DyingGasp</p>
        <p>   2   2020-04-09 05:03:12    2020-04-09 18:44:37     DyingGasp</p>
        <p>   3   2020-04-09 18:47:16    2020-04-16 08:48:23     DyingGasp</p>
        <p>   4   2020-04-16 08:50:53    2020-04-16 17:35:04     DyingGasp</p>
        <p>   5   2020-04-16 17:37:33    2020-04-29 10:36:26     DyingGasp</p>
        <p>   6   2020-04-29 10:38:44    2020-05-01 15:42:13     DyingGasp</p>
        <p>   7   2020-05-01 15:44:33    2020-05-02 18:18:55     DyingGasp</p>
        <p>   8   2020-05-02 18:22:46    2020-05-02 19:54:18     DyingGasp</p>
        <p>   9   2020-05-02 19:57:58    2020-05-02 20:02:57     DyingGasp</p>
        <p>  10   2020-05-02 20:05:28    2020-05-02 20:09:32     DyingGasp</p>
        <p>C320-RJOST-001#<span data-cursor>|</span></p>`
    },
    {
        id:'4',
        id_list:'4',
        tagp: `<p>C220-NRISHO-001#show transceiver info gpon-olt_0/3/3</p>
        <p>RxPower      :N/A       (dBm) TxPower    :3.043     (dBm)</p>
        <p>Bias-Current :11.362    (mA)  Laser-Rate :2488      (MBd)</p>
        <p>Supply-Vol   :3.211     (V)   Wavelength :N/A       (nm)</p>
        <p>Temperature  :47.600    (C)   Vender-PN  :SOGP4321-PSGA</p>
        <p>Vender-Name  :SUPERXON                  MaxDistance: 20          (km)</p>
        <p>C220-NRISHO-001#<span data-cursor>|</span></p>`
    },
    {
        id:'5',
        id_list:'5',
        tagp: `<p>Main Power Supply is AC</p>
     
        <p>Fan 1 OK</p>
        <p>Fan 2 OK</p>
        <p>Fan 3 OK</p>
       
        <p>Fan Speed Setting: Normal</p>
       
        <p>System Temperature: 22 Celsius (normal)</p>
       
        <p>Environmental information last updated 00:00:11 ago <span data-cursor>|</span></p>`
    },
    {
        id:'6',
        id_list:'6',
        tagp: `<p>SW-BACKBONE#sh mac address-table</p>
        <p class="center">Mac Address Table</p>
        <p>-------------------------------------------</p>

        <p>Vlan    Mac Address       Type        Ports</p>
        <p>----    -----------       --------    -----</p>

        <p>1    0001.9751.d119    DYNAMIC     Gig0/2</p>
        <p>1    00d0.d3ba.6319    DYNAMIC     Gig0/1</p>
        <p>10    0001.9751.d119    DYNAMIC     Gig0/2</p>
        <p>10    00d0.d3ba.6319    DYNAMIC     Gig0/1</p>
        <p>10    00e0.f702.5c01    DYNAMIC     Gig0/2</p>
        <p>11    0001.9751.d119    DYNAMIC     Gig0/2</p>
        <p>12    0001.9751.d119    DYNAMIC     Gig0/2</p>
        <p>12    0002.4a7b.9001    DYNAMIC     Gig0/2</p>
        <p>12    00d0.ff4e.4e01    DYNAMIC     Gig0/2</p>
        <p>SW-BACKBONE#</p>`
    },
    {
        id:'7',
        id_list:'7',
        tagp:`<p>R2#send vty 0</p>
        <p>Enter message, end with CTRL/Z; abort with CTRL/C:</p>
        <p>Por var deslogue deste Roteador!</p>
        <p>confirme o recebimento da mensagem, por favor…</p>
        <p>^Z</p>
        <p>Send message? [confirm]</p>
        <p>R2#</p>`
    },
    {
        id:'9',
        id_list:'9',
        tagp:`<p>Router#show version</p>
        <p>Cisco IOS Software, 2800 Software (C2800NM-ADVIPSERVICESK9-M), Version 12.4(15)T1, RELEASE SOFTWARE (fc2)</p>
        <p>Technical Support: http://www.cisco.com/techsupport</p>
        <p>Copyright (c) 1986-2007 by Cisco Systems, Inc.</p>        
        <p>Compiled Wed 18-Jul-07 06:21 by pt_rel_team</p>       
        <p>&nbsp;</p>       
        <p>ROM: System Bootstrap, Version 12.1(3r)T2, RELEASE SOFTWARE (fc1)</p>       
        <p>Copyright (c) 2000 by cisco Systems, Inc.</p>       
        <p>&nbsp;</p>       
        <p>System returned to ROM by power-on</p>       
        <p>System image file is <span>&quot;c2800nm-advipservicesk9-mz.124-15.T1.bin&quot;</span></p>       
        <p>&nbsp;</p>       
        <p>&nbsp;</p>       
        <p>This product contains cryptographic features and is subject to United</p>       
        <p>States and local country laws governing import, export, transfer and</p>
        <p>use. Delivery of Cisco cryptographic products does not imply</p>
        <p>third-party authority to import, export, distribute or use encryption.</p>
        <p>Importers, exporters, distributors and users are responsible for</p>       
        <p>compliance with U.S. and local country laws. By using this product you</p>       
        <p>agree to comply with applicable laws and regulations. If you are unable</p>      
        <p>to comply with U.S. and local laws, return this product immediately.</p>       
        <p>&nbsp;</p>       
        <p>A summary of U.S. laws governing Cisco cryptographic products may be found at:</p>     
        <p>http://www.cisco.com/wwl/export/crypto/tool/stqrg.html</p>      
        <p>&nbsp;</p>      
        <p>If you require further assistance please contact us by sending email to</p>       
        <p>export@cisco.com.</p>
        <p>&nbsp;</p>       
        <p>cisco 2811 (MPC860) processor (revision 0x200) with 60416K/5120K bytes of memory</p>       
        <p>Processor board ID JAD05190MTZ (4292891495)</p>       
        <p>M860 processor: part number 0, mask 49</p>      
        <p>2 FastEthernet/IEEE 802.3 interface(s)</p>      
        <p>239K bytes of NVRAM.</p>       
        <p>62720K bytes of processor board System flash (Read/Write)</p>      
        <p>&nbsp;</p>       
        <p><span>Configuration register is 0x2102</span></p>       
        <p>&nbsp;</p>       
        <p>Router#</p>
        `
    }
    

]