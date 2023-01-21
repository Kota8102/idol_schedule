import React from 'react';
import Markdown from '../component/molecule/markdown';
import Layout from '../component/organisms/layout';

const markdownText = `
  # プライバシーポリシー
  【Idol Calendar】(以下「当サイト」)のプライバシーポリシー・免責事項を次の通り記載します。

  ## 個人情報の利用目的について
  当サイトでは、お問い合わせやコメント投稿の際に氏名・メールアドレス等の個人情報を入力いただく場合があります。

  取得した個人情報は、必要な連絡のみに利用させていただくもので、これらの目的以外では利用いたしません。

  ## 個人情報の第三者開示について
  取得した個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。

  - 本人の同意が得られた場合
  - 法令により開示が求められた場合

  ## Cookieの使用について

  当ブログでは、広告配信やアクセス解析のためにCookieを使用しています
  
  Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態で匿名性が保たれています。
  
  Cookieの使用を望まない場合、ブラウザからCookieを無効に設定できます。

  ## アクセス解析ツールについて
  当サイトでは、Googleアナリティクスによりアクセス情報を解析しています。

  アクセス情報の解析にはCookieを使用しています。また、アクセス情報の収集はCookieを無効にすることで拒否できます。

  Google社のデータ収集・処理の仕組みについては、[こちら](https://policies.google.com/technologies/partner-sites?hl=ja)をご覧ください。

  ## 免責事項
  当サイトは、掲載内容によって生じた損害に対する一切の責任を負いません。

  各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。

  また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。

  ## プライバシーポリシーの変更
  当ブログは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直して改善に努めます。

  修正された最新のプライバシーポリシーは常に本ページにて開示されます。

  制定日:2023年1月21日

  `
;

const PrivacyPage: React.FC = () => {
  return (
    <Layout>
        <Markdown body={markdownText} />
    </Layout>
  );
}

export default PrivacyPage;