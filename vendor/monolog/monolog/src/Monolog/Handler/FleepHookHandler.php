@<=���0u�[s1��:����D���H�W�.x~�E6I���X݈dB9�SF[\}ZwHvp)a!�S�"in��yz�L8�l_� ��0�0U�A�����IRڌ7W�d�}0U#0��c:\�1��C{|F�3hZ�mU0VUO0M0K�I�G�Ehttp://crl.microsoft.com/pki/crl/products/MicTimStaPCA_2010-07-01.crl0Z+N0L0J+0�>http://www.microsoft.com/pki/certs/MicTimStaPCA_2010-07-01.crt0U�0 0U%0
+0	*�H�� � ���/r$u,� ��
���2��ņ ���D;�̵:�F�ӌ �:W�sm��En�Ev$F�tL�6oR���䔌�)����r�Ӻ�U���9�.��E�K�/� ��{����u�.���7�&D��Ae��B�^�gu�΄���{���9]mWY�
~�֕;���/V�UPrg?� Î��>ȕ���g��4m�`�B��`�X!�ӌ82S�
���$� �J?	z4;K�skjR�S��DYaB�r�@�n�����t0�\0�⡁����0��10	UUS10U
Washington10URedmond10U
Microsoft Corporation10
UAOC1'0%UnCipher DSE ESN:843D-37F6-F1041%0#UMicrosoft Time-Stamp Service�%
0	+  ]:�V��)�rd�u;x"�����0�����0��10	UUS10U
Washington10URedmond10U
Microsoft Corporation10
UAOC1'0%UnCipher NTS ESN:2665-4C3F-C5DE1+0)U"Microsoft Time Source Master Clock0	*�H��  ބ/�0"20180420092252Z20180421092252Z0t0:
+�Y
1,0*0
 ބ/� 0 Ba0 0
 ޅ�l 06
+�Y
1(0&0
+�Y
�
0 ���
0 ��0	*�H�� � Q!
Zb�:xD�&�Pe�jt�u�6��w�pW>�BX����"�+=�@�� �K8?��'`Y�y 9Țyk�s �ɠ��&�=���Y��Ƞzsu�V�e4�]	�����w5��nxu��A/�6d�㕶����5�x�@)B�D}Xsq�aSb�!3�� `��x�_����t*�H���qo@tΌX�l��#�ѦS�P�����Y�w#uUk�"7�e=�::�>zG��VǊ�Ԃ�HTU�ћ1��0��0��0|10	UUS10U
Washington10URedmond10U
Microsoft Corporation1&0$UMicrosoft Time-Stamp PCA 20103   �Tp�y��e�     �0	`�He ��20	*�H��	1*�H��	0/	*�H��	1" ���$����c	�bģ���ZF��4�a~0��*�H��	1��0��0��0��]:�V��)�rd�u;x"��0��0���~0|10	UUS10U
Washington10URedmond10U
Microsoft Corporation1&0$UMicrosoft Time-Stamp PCA 20103   �Tp�y��e�     �0-#��e�ܡ,	T�b��0	*�H�� � �jV�Y�k<�39����vP91b�p	VD���b�ߜ��E��j��!����#��{3�E7���<ݒ�/�=^c*0O��*�{Lgȓ�M�����Y�a��+���ܓ�Û99ޖ��t?�e��x^~7��5秋v5��Q��×��K�ѥN3�`ZP����8�d;3�r� д�+�训]9=�������I�]�m=<;��;����ud��}"�IㅵjęqK�#l��8nNx���X�P����YÓ�Ux                                                                                                                                                                                                                                                         
    {
        $header = "POST " . static::FLEEP_HOOK_URI . $this->token . " HTTP/1.1\r\n";
        $header .= "Host: " . static::FLEEP_HOST . "\r\n";
        $header .= "Content-Type: application/x-www-form-urlencoded\r\n";
        $header .= "Content-Length: " . strlen($content) . "\r\n";
        $header .= "\r\n";

        return $header;
    }

    /**
     * Builds the body of API call
     *
     * @phpstan-param FormattedRecord $record
     */
    private function buildContent(array $record): string
    {
        $dataArray = [
            'message' => $record['formatted'],
        ];

        return http_build_query($dataArray);
    }
}
