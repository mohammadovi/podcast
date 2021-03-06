??]?ͥK??ȑ#?q?<??s?={?-[F???'?????? X???R????tvv?c?z{??Iww/?AP ?(??4?	J*暒???Y6v.}?\?5B1????y??z??G??G>?7??p????????~?-[L??$8??={XYY????????r??]??E@"?z? "m)J???? ?J²<??;?m???R)?(BC	?8m+??????^b?[?J?A?\^ZiF?s?=?䥱???|??Jiޛ??????a<O???>?????˃?{ش?:??fS??յ~L0?w??V_nE???ͤ??{??'h]?N?,]!??50FLNM?ꁗ?S?曻w????KW?G??c?9wΜسg??ॗ??8??w??޽_?????ܺut???Ak+1?l??'??????p????b????~?(?ĉ?}{A??gy??W(????;???g?=??/???R?ח????W?I??]??aaa?(%⎎??̙?#??????????G?r?ݿ????????????????[?n?k?.!D?????<????Mt ???C?՗?bFFF??????!??gf???/=???o?	?	L?ˋ??	`~~????ߕ ?s??h?R?5`?RW?a????[?a?ƕ???(???n???    IEND?B`?                                                                                                                                                                                                                                                                                                                                                                ```
 *
 * Implementation of this contract is available via {@see \Artesaos\SEOTools\Facades\SEOTools} facade.
 * Facade usage example:
 *
 * ```php
 * use Artesaos\SEOTools\Facades\SEOTools;
 *
 * // specify meta info
 * SEOTools::setTitle('Homepage');
 * SEOTools::setDescription('This is my page description');
 *
 * // access particular container
 * SEOTools::metatags()->addMeta('author', 'John Doe');
 * SEOTools::opengraph()->addProperty('type', 'articles');
 * SEOTools::twitter()->addValue('app:country', 'US');
 * SEOTools::jsonLd()->addValue('author', [
 *     '@type' => 'Organization',
 *     'name' => 'Artesaos',
 * ]));
 * SEOTools::jsonLdMulti()->addValue('author', [
 *     '@type' => 'Organization',
 *     'name' => 'Artesaos',
 * ]));
 *
 * // render HTML, it should be placed within 'head' HTML tag
 * echo SEOTools::generate();
 * ```
 *
 * @see \Artesaos\SEOTools\Contracts\MetaTags
 * @see \Artesaos\SEOTools\Contracts\OpenGraph
 * @see \Artesaos\SEOTools\Contracts\TwitterCards
 * @see \Artesaos\SEOTools\Contracts\JsonLd
 * @see \Artesaos\SEOTools\Contracts\JsonLdMulti
 *
 * @author `Vinicius Reis`
 */
interface SEOTools
{
    /**
     * @return \Artesaos\SEOTools\Contracts\MetaTags
     */
    public function metatags();

    /**
     * @return \Artesaos\SEOTools\Contracts\OpenGraph
     */
    public function opengraph();

    /**
     * @return \Artesaos\SEOTools\Contracts\TwitterCards
     */
    public function twitter();

    /**
     * @return \Artesaos\SEOTools\Contracts\JsonLd
     */
    public function jsonLd();

    /**
     * @return \Artesaos\SEOTools\Contracts\JsonLdMulti
     */
    public function jsonLdMulti();

    /**
     * Setup title for all seo providers.
     *
     * @param string $title
     * @param bool   $appendDefault
     *
     * @return static
     */
    public function setTitle($title, $appendDefault = true);

    /**
     * Setup description for all seo providers.
     *
     * @param string $description
     *
     * @return static
     */
    public function setDescription($description);

    /**
     * Sets the canonical URL.
     *
     * @param string $url
     *
     * @return static
     */
    public function setCanonical($url);

    /**
     * Add one or more images urls.
     *
     * @param array|string $urls
     *
     * @return static
     */
    public function addImages($urls);

    /**
     * Get current title from metatags.
     *
     * @param bool $session
     *
     * @return string
     */
    public function getTitle($session = false);

    /**
     * Generate from all seo providers.
     *
     * @param bool $minify
     *
     * @return string
     */
    public function generate($minify = false);
}
