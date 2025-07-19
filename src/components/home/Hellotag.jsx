function Hellotag() {
  return (
    <div className='hellotag'>
      <h1>
        <a href="mailto:Team@newsmakermediagroup.com">
          Team@newsmakermediagroup.com
        </a>
      </h1>
      <h1>
        <a href="tel:+919819416689" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/phone_logo.png"
            style={{ marginRight: '8px' }}
            crossOrigin="anonymous"
            width={60}
            alt="Phone"
          />
          +91 9819416689
        </a>
      </h1>
    </div>
  )
}

export default Hellotag;
