
      </Control>
      <Control ClassName="saveHint" ControlType ="11" LabState="BoolExitSaveScan">
        <Text><![CDATA[終了してもよろしいですか？終了すると、スキャンの結果は保存されません。]]></Text>
      </Control>
      <Control ClassName="StopRecovery" ControlType ="11" >
        <Text><![CDATA[復元を停止してもよろしいですか？停止した場合、選択したファイルを復元することはできません。]]></Text>
      </Control>
      <Control ClassName="Save" ControlType ="11" >
        <Text><![CDATA[次回スキャンした結果を読み込む際は、スキャンしたデータのみ復元することができます。スキャンし続けることはできません。]]></Text>
      </Control>
      <Control ClassName="StopDialog" ControlType ="11" >
        <Text><![CDATA[スキャンはこの段階では再開することができません。スキャンを停止してもよろしいですか？]]></Text>
      </Control>
      <Control ClassName="resetFilter" ControlType ="11" >
        <Text><![CDATA[関連するデータは見つかりませんでした！フィルターをリセットしてください。]]></Text>
      </Control>
      <Control ClassName="noDriver" ControlType ="11" >
        <Text><![CDATA[端末が取り外されました。再接続してもう一度やり直してください。]]></Text>
      </Control>
      <Control ClassName="noDriverLostPar" ControlType ="11" >
        <Text><![CDATA[ボリュームが見つからないかドライブが見つかりません。他の復元モードを試してください。]]></Text>
      </Control>
      <Control ClassName="noVolume" ControlType ="11" >
        <Text><![CDATA[ボリュームが見つかりません。失われたデータを見つけるために他の復元モードを試してください。]]></Text>
      </Control>
      <Control ClassName="sysCorrupted" ControlType ="11" >
        <Text><![CDATA[無効なボリュームか又は、ひどく破損しているファイルシステムです。損失したデータを見つけるために他のファイルシステムまたはリカバリモードをお試しください。]]></Text>
      </Control>
      <Control ClassName="noData1" ControlType ="11" >
        <Text><![CDATA[申し訳ございません！ファイルが見つかりません。ディープスキャンで再びスキャンしますか？]]></Text>
      </Control>
      <Control ClassName="noData2" ControlType ="11" >
        <Text><![CDATA[申し訳ございません！ファイルが見つかりません。RAWファイルの復元で再びスキャンしますか？]]></Text>
      </Control>
      <Control ClassName="noData3" ControlType ="11" >
        <Text><![CDATA[申し訳ございません！関連するデータは見つかりませんでした。損失したデータを見つけるために、他のリカバリーモードをお試しください。]]></Text>
      </Control>
      <Control ClassName="noWantedFiles1" ControlType ="11" >
        <Text><![CDATA[ファイルが見つからない場合は、ディープスキャンまたはRAWファイルの復元をお試しください。]]></Text>
      </Control>
      <Control ClassName="noWantedFiles2" ControlType ="11" >
        <Text><![CDATA[ファイルが見つからない場合は、RAWファイルの復元をお試しください。]]></Text>
      </Control>
      <!--粉碎文件-->
      <Control ClassName="t_strHead" ControlType ="11" >
        <Text><![CDATA[]]></Text>
      </Control>
      <Control ClassName="t_strTail" ControlType ="11" >
        <Text><![CDATA[ 個のファイルを上書きしてもよろしいですか？上書きされたファイルは、これ以上復元することはできません。]]></Text>
      </Control>
      <Control ClassName="t_strToolTipTail" ControlType ="11" >
        <Text><![CDATA[ 個のファイルは上書きされました。]]></Text>
      </Control>
      <Control ClassName="t_strFailTail" ControlType ="11" >
        <Text><![CDATA[ 個のファイルの上書きに失敗しました。]]></Text>
      </Control>
      <!--20120112 add 恢复失败-->
      <Control ClassName="t_strSaveFail" ControlType ="11" >
        <Text><![CDATA[ 保存に失敗しました。使用しているデバイスを確認してください。]]></Text>
      </Control>
      <Control ClassName="ReadBufferFailed" ControlType ="11" >
        <Text><![CDATA[ 復元に失敗したファイルがあります。]]></Text>
      </Control>
      <Control ClassName="WriteBufferFailed" ControlType ="11" >
        <Text><![CDATA[ 復元に失敗したファイルがあります。]]></Text>
      </Control>
	  <Control ClassName="scancomplete" ControlType ="11">
        <Text><![CDATA[スキャンは完了しました！クイックスキャンで紛失したファイルが見つからない場合は、ディープスキャンでもう一度お試しください]]></Text>
      </Control>
      <!--右键菜单-->
      <Control ClassName="m_pRightMenu" ControlType="6">
        <Size Width="200"/>
      </Control>
      <Control ClassName="m_pRecoverHighlight" ControlType="11">
        <Text><![CDATA[選択したファイルを復元．．．]]></Text>
        <Margins Left="0" Top="0" Width="200" Height="24"></Margins>
      </Control>
      <Control ClassName="m_pRecoverChecked" ControlType="11">
        <Text><![CDATA[チェックしたファイルを復元．．．]]></Text>
        <Margins Left="0" Top="24" Width="200" Height="24"></Margins>
      </Control>
      <Control ClassName="m_pCheckHighlight" ControlType="11">
        <Text><![CDATA[選択したファイルをチェック．．．]]></Text>
        <Margins Left="0" Top="50" Width="200" Height="24"></Margins>
      </Control>
      <Control ClassName="m_pUncheckHighlight" ControlType="11">
        <Text><![CDATA[選択したファイルをチェックしない．．．]]></Text>
        <Margins Left="0" Top="74" Width="200" Height="24"></Margins>
      </Control>
      <Control ClassName="m_pCheckAll" ControlType="11">
        <Text><![CDATA[すべてをチェック]]></Text>
        <Margins Left="0" Top="100" Width="200" Height="24"></Margins>
      </Control>
      <Control ClassName="m_pUncheckAll" ControlType="11">
        <Text><![CDATA[すべてのチェックを解除]]></Text>
        <Margins Left="0" Top="124" Width="200" Height="24"></Margins>
      </Control>
      <Control ClassName="m_pSmash" ControlType="11">
        <Text><![CDATA[ハイライトファイルを上書き…]]></Text>
        <Margins Left="0" Top="150" Width="200" Height="24"/>
      </Control>
    </Dialog>    
    <Dialog ClassName ="CDataPublic">
      <Control ClassName="strError" ControlType="11">
        <Text><![CDATA[Wondershare データリカバリーがまだ実行されています！]]></Text>
      </Control>
      <Control ClassName="strWaring" ControlType="11">
        <Text><![CDATA[警告]]></Text>
      </Control>
      <Control ClassName="strWonderShare" ControlType="11">
        <Text><![CDATA[Copyright © 2017 Wondershare. All rights reserved.]]></Text>
      </Control>
      <Control ClassName="checkWarmMsg" ControlType="11">
        <Text><![CDATA[登録コードが繰り返しアクティブになっているようです。現在、そのまま利用することは可能ですが、個人情報のセキュリティを確認してください。使用制限を越える際に無効にする可能性がございます。]]></Text>
      </Control>
      <Control ClassName="t_strWaringTitle" ControlType="11">
        <Text><![CDATA[お客様は偽造ソフトウエアの被害に遭われた可能性があります]]></Text>
      </Control>
      <Control ClassName="checkQuitMsg" ControlType="11">
        <Text><![CDATA[登録コードが使用制限を超えています。登録コードについて問題がございましたら、お気軽に連絡してください。]]></Text>
      </Control>
      <Control ClassName="t_strQuitTitle" ControlType="11">
        <Text><![CDATA[無効な登録コード]]></Text>
      </Control>
      <Control ClassName="m_strArchive" ControlType="11">
        <Text><![CDATA[アーカイブ]]></Text>
      </Control>
      <Control ClassName="m_strAudio" ControlType="11">
        <Text><![CDATA[オーディオ]]></Text>
      </Control>
      <Control ClassName="m_strDataBase" ControlType="11">
        <Text><![CDATA[データベース]]></Text>
      </Control>
      <Control ClassName="m_strDocument" ControlType="11">
        <Text><![CDATA[ドキュメント]]></Text>
      </Control>
      <Control ClassName="m_strEmail" ControlType="11">
        <Text><![CDATA[Eメール]]></Text>
      </Control>
      <Control ClassName="m_strGraphic" ControlType="11">
        <Text><![CDATA[グラフィック]]></Text>
      </Control>
      <Control ClassName="m_strInternetWeb" ControlType="11">
        <Text><![CDATA[インターネットウェブ]]></Text>
      </Control>
      <Control ClassName="m_strMiscellaneous" ControlType="11">
        <Text><![CDATA[その他]]></Text>
      </Control>
      <Control ClassName="m_strVideo" ControlType="11">
        <Text><![CDATA[ビデオ]]></Text>
      </Control>
      <Control ClassName="m_strNoExtension" ControlType="11">
        <Text><![CDATA[拡張子が無いファイル]]></Text>
      </Control>
      <Control ClassName="strByte" ControlType="11">
        <Text><![CDATA[ bytes]]></Text>
      </Control>
      <Control ClassName="strKB" ControlType="11">
        <Text><![CDATA[ KB]]></Text>
      </Control>
      <Control ClassName="strMB" ControlType="11">
        <Text><![CDATA[ MB]]></Text>
      </Control>
      <Control ClassName="strGB" ControlType="11">
        <Text><![CDATA[ GB]]></Text>
      </Control>
    </Dialog>
    <Dialog ClassName="CRecoveryDialog" >
      <Control ClassName="t_strNewName" ControlType="11">
        <Text><![CDATA[新規フォルダ]]></Text>
      </Control>
      <Control ClassName ="m_newFolderButton" ControlType="13">
        <Text><![CDATA[新規フォルダ]]></Text>
      </Control>
      <Control ClassName ="m_recoverButton" ControlType="13">
        <Text><![CDATA[復元]]></