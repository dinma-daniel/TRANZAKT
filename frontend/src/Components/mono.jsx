import React from 'react';
import MonoConnect from '@mono.co/connect.js';
import axios from "axios";

export default function Mono(props) {
  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => console.log('Widget closed'),
      onLoad: () => console.log('Widget loaded successfully'),
      onSuccess: async function hello({ code }) {
        let cod = { authCode: code }
        // send the username and password to the server
        const { data } = await axios.post(`/mono/auth`, cod);
      },
      key: "live_pk_l7vzWBnWxmWmJMAwSJNJ"
    })

    monoInstance.setup()

    return monoInstance;
  }, [])

  return (
    <div>
      <button onClick={() => monoConnect.open()} className='mono__btn'>
        Link account with Mono
      </button>
    </div>
  )
}
