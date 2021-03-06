ked as prefered license
lic_alreadyexists=License file %s already exists. 
lic_typeOfLicNoMove=This type of license cannot be moved to another medium.
lic_copyerror=Could not copy file from %s to %s.
lic_licfiledateinvalid=License file date and time is invalid.
lic_fileexistsDelIt=License file %s already exists. Please delete it if you want to import a new license.


; --- new strings for expiration reminder
expRemind_days=Your license is set to expire in %d day(s).
expRemind_execs=Your license is set to expire after %d remaining program execution(s).
expRemind_ShopLink=Please renew your license by visiting the Online Shop today.
expRemind_Contact=You may also contact your local %s Representative.
tabsheet_expiration=Product expiration

expRemind_clickhere=Click here
                                                                                                                                                                                                                                      d-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-end">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Reset Password') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
