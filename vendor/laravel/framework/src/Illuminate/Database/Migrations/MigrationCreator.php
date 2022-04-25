s-serif'; font-size: 10pt;" lang="FR">Reconstructruire</span></b></span><b><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR"> un RAID:</span></b><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR"> Si vous cliquez sur l'ic�ne <span class="SpellE">Reconstructruire</span> 
un RAID, l'utilitaire de reconstruction RAID s&#8217;ouvre.<o:p></o:p></span></p>

        <p><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR">S�lectionnez le type de RAID et le nombre de lecteurs, et laissez le 
syst�me analyser les donn�es pour tenter de reconstruire le 
RAID.<o:p></o:p></span></p>

        <p><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR">Cette option est<span style="">  </span>utile lorsque 
le contr�leur a cess� de fonctionner, mais que les disques sont toujours en 
fonctionnement. Connectez simplement les disques durs � l&#8217;ordinateur et 
reconstruisez le RAID et r�cup�rez vos donn�es!</span></p>
<p><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR"><br>
</span><span style="" lang="FR"><o:p></o:p></span></p>
        <p align="left"><font face="Verdana, Arial, Helvetica, sans-serif" size="-1"> </font></p>

			</td>
			<td style="text-align: center;" width="66%">
			<img src="../images/raid1.png">
			</td>
		</tr>
		<tr>
			<td width="34%">
        <p><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR">Choisissez d&#8217;abord le type de RAID � reconstruire.<span style="">  </span>Si votre type de RAID n'est pas r�pertori�, 
choisissez le RAID g�n�rique qui correspond au mieux � votre type de RAID (HW, 
SW, RAID0, RAID5).<o:p></o:p></span></p>

        <p><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR">Les donn�es de parit� est g�n�r�e sur un RAID5 de fournir une protection 
contre une d�faillance d'un disque. Les donn�es de parit� est distribu�e 
�galement entre tous les disques membres dans un mod�le de rotation. Le RAID 
Reconstructor choisira automatiquement le sch�ma de rotation la plus courante 
pour le type de RAID choisi ou vous pouvez s�lectionner manuellement le sch�ma 
de rotation si elle est connue.<o:p></o:p></span></p>

        <p style="margin: 0in 0in 0pt;"><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;">NONE&#8211;RAID0<o:p></o:p></span></p>

        <p style="margin: 0in 0in 0pt;"><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;">FORWARD&#8211;<span class="SpellE">asynchrone</span> <span class="SpellE">droit</span> (Silicon 
Image)<o:p></o:p></span></p>

        <p style="margin: 0in 0in 0pt;"><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;">BACKWARD&#8211;<span class="SpellE">asynchrone</span> gauche (Adaptec, Generic, 
Promise)<o:p></o:p></span></p>

        <p style="margin: 0in 0in 0pt;"><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;">FORWARDDYN&#8211;<span class="SpellE">droit</span> <span class="SpellE">synchrone</span> (Linux SW 
RAID)<o:p></o:p></span></p>

        <p style="margin: 0in 0in 0pt;"><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;">BACKWARDDYN&#8211;gauche 
<span class="SpellE">synchrone</span> (AMI, Windows SW-RAID)<o:p></o:p></span></p>

        <p style="margin: 0in 0in 0pt;"><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;">FORWARDDELAY<o:p></o:p></span></p>

        <p style="margin: 0in 0in 0pt;"><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;">BACKWARDDELAY 
(HP/Compaq)</span></p>
</td>
			<td style="text-align: center;" width="66%">
			<img src="../images/raid2.png"><br><br>
			</td>
		</tr>
		<tr>
			<td width="34%">
			<p align="left">
			</p>
        <p><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR">Ensuite, s�lectionnez le nombre de disques dans le RAID. Lorsque cela 
est possible, Choisissez les disques pour acc�l�rer l'analyse. Assurez-vous que 
vous choisissez uniquement les disques qui contiennent le RAID ou l'analyse 
�chouera.</span><span style="" lang="FR"><o:p></o:p></span></p>

			
			</td>
			<td style="text-align: center;" width="66%">
			<img src="../images/raid3.png"><br><br>
			</td>
		</tr>
		<tr>
			<td width="34%">
			<p align="left">
			<font face="Verdana, Arial, Helvetica, sans-serif" size="-1">Si
vous �tes incertain de l'ordre du disque, puis cliquez sur le menu
Options&gt;&gt; et cochez la case appel�e l'ordre du disque. Cela
permettra �galement d'analyser les diff�rents ordres de disques du RAID.</font></p>
			</td>
			<td style="text-align: center;" width="66%">
			<img style="width: 400px; height: 387px;" alt="" src="../images/raid3a.gif"><br><br>
			</td>
		</tr>
		<tr>
			<td width="34%">
        <p><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR">Une fois que vous avez r�gl� les param�tres, cliquez sur le bouton 
Lancer pour analyser les disques.<o:p></o:p></span></p>

        <p><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR">La recherche teste les diff�rentes combinaisons de donn�es sur le RAID. 
Elles sont class�es par ordre de <span class="SpellE">vraissemblance</span> dans 
la liste des Combinaisons. </span><span style="font-family: 'Verdana','sans-serif';" lang="FR"><o:p></o:p></span></p>
</td>
			<td style="text-align: center;" width="66%">
			<img src="../images/raid4.png"><br><br>
			</td>
		</tr>
		<tr>
			<td width="34%">
        <p><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR">Lorsque la recherche se termine, la liste des combinaisons test�es pour 
votre RAID appara�t. Plus le r�sultat est �lev�, plus il est probable qu&#8217;il 
s&#8217;agisse de la bonne combinaison. Le meilleur score n&#8217;est pas toujours le 
meilleur r�sultat mais est un bon d�part pour commencer la Reconstruction de 
votre RAID<o:p></o:p></span></p>

        <p><span style="font-family: 'Verdana','sans-serif'; font-size: 10pt;" lang="FR">Cliquez sur l'une des combinaisons test�es, puis cliquez su