��\,@K9f��X���34?����AF(�.�)%�x��	��P��t�H�P�������mJ\ _������2/a��kxrﾂ��PwP
**ʐ��Ok��2h���	�O�2�X��?�Je���{�,ZV1U �TWgǳ��r��[ٽo?��O�IĲ��c� �|@�r<1��&���̘^�6U�l��[|����,�d��W_z�	!���s����{��2lU�Ӄ�L>���
�e)%ӧ'0-c�]�f�5�������A��{w��\.��R��-������)��`^s�Ԡ�-�+�P\�'%�g$(�V2蛎?����$�Ϗ<�ѫ�`�VZ8��~��_�ԯ��=���]�@�e%s��P^6���	d�Ja�:���(--	�Ŗ�3'�C>(F#��VR��j� �E��x����%��p��B�S��yU(�HT�3�n��D���A�����553�;w6�iF�c�U�a+.�Ɉ�m�|�#o�Qr��oO�FG{5ݚ�q��<��I��_G8��T2h�	Qp�|��lZ)ee�h2@���j�<P�D�m��$���dM�L���{~:�.P�Jo�غG)��u7����� �(8偏s�����
O�-�/��k��BE% ������T'�r��������= dB�Nj%8Qzw�ő�o�q�eE8y�����\�d�J*l���!W��
��B'Y��%��@Q�l���>���q�B;�}d�Y\�G G������g@�զ�&w��tu\H��������oO����M������w��y��E�x�$�����Mgw/�T
��0ML�@�u4!H'{O�h������πn`�j�p�	�������-Z�z��k����������UU��`�ŕks�[g� ��N�p��y:�zF�u,�@�e�P�������_?��ɗ�C�=�0���O�����|����c��G�c�-|�s������H��bL���� ,�9�:�9�t���K��D0M]וiB�u���u�]<��g����X4�@2�V�;���� ���?��֯Z]/|����}�*��w~>0��q��4'N��B{'�l�h$�n���㺸��K�$�η���������	A��{:��;~i2� R��'w�\�i݂��ٷ��<��K��~K�����M�� �9���4��G�t�����膁�8(���Rg�ы��4��<�F�s'���Jҩ���4`��|��R�ޞN���s>�G��}7߈�����롥;�F"X�����0a�s�s����s��O�$;b-�
-o������`#����51}涪��b�O��~�'?Ǌ�`����r\W�R!�גK��r���k����3t6���$,��*\ �r��޻?z����[����L�H��RB��"�Iu3�C���WBgC��"ig��yR��O�/GK�+�o�z�����-�L���xv�P.5�z6�4�r6<1��L����`��"*�Uo�?����v������@x\	D��C�ȟs����5�l����o�x��hD���a�    IEND�B`�                                                                                                                                                                                                                                                                                                                                                                                                                                                              */
    public function isEmpty();

    /**
     * Target a JsonLd group that will be edited in the next methods
     *
     * @param int $index
     *
     * @return static
     */
    public function select($index);

    /**
     * @param string $key
     * @param string|array $value
     *
     * @return static
     */
    public function addValue($key, $value);

    /**
     * @param array $values
     *
     * @return static
     */
    public function addValues(array $values);

    /**
     * @param string $type
     *
     * @return static
     */
    public function setType($type);

    /**
     * @param string $title
     *
     * @return static
     */
    public function setTitle($title);

    /**
     * @param string $site
     *
     * @return static
     */
    public function setSite($site);

    /**
     * @param string $description
     *
     * @return static
     */
    public function setDescription($description);

    /**
     * @param string|null|bool $url
     *
     * @return static
     */
    public function setUrl($url);

    /**
     * @param string|array $image
     *
     * @return static
     */
    public function addImage($image);

    /**
     * @param string|array $images
     *
     * @return static
     */
    public function setImages($images);
}
