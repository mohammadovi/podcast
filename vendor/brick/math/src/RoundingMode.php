�PNG

   IHDR         �w=�   gAMA  ���a   bKGD � � �����   	pHYs  `  `zxE�   	vpAg       xL��  �IDATHǵ�[lT���s��r<����m.�@�e�v�� )-�M@M��!,��*����$�CyhQPU!UJZI�rC0���8vL���n:6��ϙ9�9sv�V����C���^�^��/�m�?��$�|>oss���Ғ
�����龾>mff� ��
��4M:r����۷���t{(�[��(��,{]�Mۖ5�$������O����Ǐ300<p���7����Ĳ����!�Up��,(Q���p��/\�q��cǎ���*���gΞ=K�������**+�',�'`^���}�%rd�2��t�6i
��Y����ph�����ޭ[���n��g�ɓ'�;������o>����
(���92H��,<0�n�%?�����T*������߿�=I�B,����tuu}�vÆS��y�7�E��R�G��.G�o]�����a�&]��NV�J��߽���mmmc�p���$�_l��O��r�g��w$�&eFS3i�3a΀{:��9�NH��T�e<�bgy�leAخ��~���1+G"TU�l~�齶�_s~�d�r������▋�,k�t���S`�*��傴i�7c.=Q]*��z�̙3�\��������l�ʒ❃�4�`�+$� O��+� �2^Y��/�J]/��
<�M,�"c��=m󵊒�Muuۊ���,�����а���W}�@#����A0k��j���$�J�R��:�e��C�O Da``��,��MZrqQaS0(����:ȹ3OR`e����R���u�]���&22�^�P��<llfb�8Y#-c0�Щ\�_�g�U��|��dJ3	��@
ж��
�"K.{+@uMt��,~1����B7A���,�W��a�`���Ȓ�bA*����� ���P@@ k���^�䵡yޝ��L����U<�*�ͺ��i�0���C�Lz�*�H�A8������+�DB�L�����/�:#�6q26An(��<?�e=�~�zJ>�<����;s�����C*������㜻v�����c�:cb�����w'I,<�M� m�$5y2k
Cb1�F��r��)�߿����{�y]ds}����n�dQO�n:Nz)΋��H��o>����C�t7�@��I��W�Ʀr�e~ll�O�G�4�����k����������B��f�I������24%�G�)���M�×���ᷞAK�{���_���:
��ݻ�������ծ�~<vo.��_�6,����|��1H�+B�p�uA����$ī��Bn�g��j��h4jH���E���ttt���ݟn��Y�m�z/����,�n�c!,a��1!c-K#�G��v���q}�����_imm�v��Eb��2 ��������7�����������޴a��Laڙe��$r|>֭���g��{Y)��s��+{�|�]�v�������zzz�t�Ҋ}���T]Uu���dtN�xb���#L˦hE>Օ�i���� �H$��}{�����ˎ���睼v�Zfff<'N�X�e˖]�Hd{���J����Ǚ�'CSSS=����:::�$�_�}�_��cǎ���������`0蟟�_[�q��bCC�}������x�B�P�&5   +tEXtCreation Time Di 23 Mrz 2010 16:16:01 +0100��W*   %tEXtdate:create 2010-03-23T16:22:25+01:00�	�   %tEXtdate:modify 2010-03-23T16:17:22+01:00&8��    IEND�B`�                                                                                                 e that this rounding mode never increases the calculated value.
     */
    public const FLOOR = 4;

    /**
     * Rounds towards "nearest neighbor" unless both neighbors are equidistant, in which case round up.
     *
     * Behaves as for UP if the discarded fraction is >= 0.5; otherwise, behaves as for DOWN.
     * Note that this is the rounding mode commonly taught at school.
     */
    public const HALF_UP = 5;

    /**
     * Rounds towards "nearest neighbor" unless both neighbors are equidistant, in which case round down.
     *
     * Behaves as for UP if the discarded fraction is > 0.5; otherwise, behaves as for DOWN.
     */
    public const HALF_DOWN = 6;

    /**
     * Rounds towards "nearest neighbor" unless both neighbors are equidistant, in which case round towards positive infinity.
     *
     * If the result is positive, behaves as for HALF_UP; if negative, behaves as for HALF_DOWN.
     */
    public const HALF_CEILING = 7;

    /**
     * Rounds towards "nearest neighbor" unless both neighbors are equidistant, in which case round towards negative infinity.
     *
     * If the result is positive, behaves as for HALF_DOWN; if negative, behaves as for HALF_UP.
     */
    public const HALF_FLOOR = 8;

    /**
     * Rounds towards the "nearest neighbor" unless both neighbors are equidistant, in which case rounds towards the even neighbor.
     *
     * Behaves as for HALF_UP if the digit to the left of the discarded fraction is odd;
     * behaves as for HALF_DOWN if it's even.
     *
     * Note that this is the rounding mode that statistically minimizes
     * cumulative error when applied repeatedly over a sequence of calculations.
     * It is sometimes known as "Banker's rounding", and is chiefly used in the USA.
     */
    public const HALF_EVEN = 9;
}
