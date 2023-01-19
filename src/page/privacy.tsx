import React from 'react';

import Layout from '../component/layout';

function Privacy() {
  return (
    <Layout>
        <div className="mx-auto p-4">
            <h2 className="text-xl font-medium">個人情報の利用目的について</h2>
            <p className="text-sm leading-relaxed">
                    当ブログでは、お問い合わせやコメント投稿の際に氏名・メールアドレス等の個人情報を入力いただく場合があります。
                    取得した個人情報は、必要な連絡のみに利用させていただくもので、これらの目的以外では利用いたしません。
            </p>

            <h2 className="text-xl font-medium">個人情報の第三者開示について</h2>
            <p className="text-sm leading-relaxed">
                取得した個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
                ・本人の同意が得られた場合
                ・法令により開示が求められた場合
            </p>
            <div>追記が必要</div>
        </div>
    </Layout>
  );
}

export default Privacy;