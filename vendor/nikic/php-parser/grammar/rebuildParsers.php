, needed %u)
   GNUTLS_SEC_PARAM_HIGH: certificate's security level is unacceptable
    GNUTLS_SEC_PARAM_HIGH: certificate's issuer security level is unacceptable
     GNUTLS_SEC_PARAM_ULTRA: certificate's signature hash is unknown
        GNUTLS_SEC_PARAM_ULTRA: certificate's signature hash strength is unacceptable (is %u bits, needed %u)
  GNUTLS_SEC_PARAM_ULTRA: certificate's security level is unacceptable
   GNUTLS_SEC_PARAM_ULTRA: certificate's issuer security level is unacceptable
    SUITEB: certificate uses an unacceptable version number
        SUITEB: certificate is not signed using ECDSA-SHA256 or ECDSA-SHA384
   SUITEB: certificate does not contain ECC parameters
    SUITEB: certificate's issuer does not have ECC parameters
      SUITEB: cannot read certificate params
 SUITEB: certificate's ECC params do not contain SECP256R1 or SECP384R1
 SUITEB192: certificate does not use SECP384R1
  SUITEB: certificate's issuer uses an unacceptable version number
       SUITEB: certificate's issuer ECC params do not contain SECP256R1 or SECP384R1
  SUITEB: certificate's issuer ECC params are weaker than the certificate's
      SUITEB: certificate is signed with ECDSA-SHA256 when using SECP384R1
   $???p???????$??????????P???0???$???$???$???$???$???$???$???$???$???$???$???$???$???$???$???$???$???$???$???$???$???$???$???$???????????1.3.6.1.5.5.7.3.1 2.16.840.1.113730.4.1 2.16.840.1.113733.1.8.1 2.5.29.37.0     looking for key purpose '%s', but have '%s'
 tbsCertificate signature signatureAlgorithm.algorithm tbsCertList          find_crl_issuer gnutls_x509_crl_verify          _gnutls_x509_verify_data        _gnutls_check_key_purpose       is_level_acceptable     check_if_ca     verify_crt              _gnutls_verify_crt_status       is_issuer       _gnutls_check_if_same_key2                      1.3.6.1.5.5.7.48.2 1.3.6.1.5.5.7.48.1 ?%u.accessMethod ?%u.accessLocation x509.c ASSERT: %s[%s]:%d
     ?%u.accessLocation.uniformResourceIdentifier PKIX1.Certificate  tbsCertificate.issuer.rdnSequence       tbsCertificate.subject.rdnSequence signatureAlgorithm.algorithm tbsCertificate.subjectPublicKeyInfo.algorithm.algorithm signature tbsCertificate.version CERTIFICATE X509 CERTIFICATE   tbsCertificat