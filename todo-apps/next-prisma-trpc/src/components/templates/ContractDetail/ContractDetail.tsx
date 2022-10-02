import React, { useEffect } from 'react';
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { Tag } from '../../atoms/Heading/Heading.const';
import { Heading } from '../../atoms/Heading/Heading';
import { Badge, BADGE_SIZE } from '../../atoms/Badge/Badge';

const amount = '2';
const currency = 'USD';
const style = { layout: 'vertical' };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: 'resetOptions',
      value: {
        ...options,
        currency: currency,
      },
    } as any);
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order?.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};

export const ContractDetail = () => {
  return (
    <main>
      <Heading tag={Tag.H1}>契約内容</Heading>
      <div className="flex flex-col gap-16 w-4/5 mx-auto p-8">
        <div>
          <Heading tag={Tag.H3}>Language</Heading>
          <div className="w-4/5 mx-auto prose lg:prose-xl">
            <Badge size={BADGE_SIZE.LG}>Tagalog</Badge>
          </div>
        </div>
        <div>
          <Heading tag={Tag.H3}>About Class</Heading>
          <div className="w-4/5 mx-auto prose lg:prose-xl">
            <h3>Introduction</h3>
            <p>
              Are you an ambitious business-oriented English learner? If so,
              together we&apos;ll have lessons covering topics like
              &quot;Managing Yourself: Extreme Productivity,&quot;
              &quot;Emotional Agility,&quot; or &quot;Take Ownership of Your
              Future Self
            </p>
            <p>
              Are you looking to develop yourself into a more well-rounded and
              cultured person? Do you want to discover yourself and your place
              in the world? Let`&apos;s do lessons together on &quot;Mental
              Health & Self-Esteem,&quot; &quot;The Evolution of Racism,&apos;
              or &quot;What Can We Do to Help Teenage Boys Become Better
              Men?&quot; For some extra spice, we`&apos;ll read about timeless
              life lessons in stories like &quot;The Bet&quot; by Anton Chekhov
              and &quot;The Diamond Necklace&quot; by Guy de Maupassant
            </p>
            <p>
              Are you interested in accent reduction or public speaking? Have
              you ever confused the pronunciation of beach and b___ch? Then
              let&apos;s work together on tongue twisters and the American
              accent accent through games and acting!
            </p>
          </div>
        </div>
        <div>
          <Heading tag={Tag.H3}>注意事項</Heading>
          <ul className="w-4/5 mx-auto list-decimal">
            <li className="mt-0 mb-2">
              本サービスはPaypalからのみのお支払いとなります
            </li>
            {/* TODO: 要調査 */}
            <li className="mt-0 mb-2">
              クレジットカード（VISA/MasterCard/American Express/Diners
              Club/JCB）【要調査】でのお支払いが可能です。
            </li>
            <li className="mt-0 mb-2">
              お支払いは授業単位でのお支払いになります。継続される場合には再度先生に契約をお申し込みください
            </li>
            <li className="mt-0 mb-2">
              一度お支払い頂いた場合原則返金致しかねます。契約後のトラブル等の責任は負いかねますのでご了承下さい
            </li>
            <li className="mt-0 mb-2">
              もし先生による授業の放棄等が発生しましたら【リンク】よりご報告ください。厳重な注意もしくはアカウントの停止にて対応いたします
            </li>
            <li className="mt-0 mb-2">
              先生との直接契約は禁止しております。万が一サービス外でのやりとりが発覚した場合は厳粛に対応いたします
            </li>
            <li className="mt-0 mb-2">
              お支払いが完了しましたらメールで通知されサービスの利用が開始となります。先生とのやりとりを進めてください
            </li>
          </ul>
        </div>
        <div>
          <Heading tag={Tag.H3}>お支払い</Heading>
          <div className="w-1/2 mx-auto">
            <PayPalScriptProvider
              options={{
                'client-id': 'test',
                components: 'buttons',
                currency: 'USD',
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </main>
  );
};
