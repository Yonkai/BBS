import moment from 'moment';


const ReplyDateMade = (props) => (
    <>
      <div>
        {/* UTC offset for new york, so EST */}
          <p>{moment(props.threadTime?props.threadTime:0).utcOffset('-0800').format('LLL')}</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;
          }
          div{
            border:5px salmon solid;
          }
        `}</style>
    </>
)

export default ReplyDateMade