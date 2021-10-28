import { useLoginContext } from '@wal3/rc-login'

export default function MyApplication({children}) {
  const { payload, logout } = useLoginContext();

  console.log(payload);

  return (
    <>
    <div>This is the application which needs login.</div>
    <div>
      <button onClick={() => {logout(false);}} >logout</button>
    </div>
    </>
  );
}
