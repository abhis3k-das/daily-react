export type BadgeType = {
    status : 'idle' | 'loading' | 'success' | 'error';
    compact? : boolean;
}
const Badge = ({status , compact = false} : BadgeType) => {
  return (
        <div style={{
            width: compact ? '100px' : '150px',
            border : '1px solid black',
            textAlign : 'center'
        }}>
            {status}
        </div>
    )
}

export default Badge