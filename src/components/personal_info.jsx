/* eslint-disable react/prop-types */
export default function PersonalInfo({
  fullName,
  onNameChange,
  email,
  onEmailChange,
  tel,
  onTelChange,
  address,
  onAddressChange,
}) {
  return (
    <div className="flex flex-col justify-center items-center font-poppins bg-white p-4  mb-4 rounded-xl">
      <h1 className=" text-green-900 text-3xl py-4 font-bold">
        Person details
      </h1>

      {/* full name */}

      <label htmlFor="fullName">
        Full name
        <input
          type="text"
          id="fullName"
          placeholder="First name and Last name"
          value={fullName}
          onChange={onNameChange}
          className=" block"
        />
      </label>

      <label htmlFor="Email">
        Email
        <input
          type="email"
          id="Email"
          placeholder="Email address"
          value={email}
          onChange={onEmailChange}
          className=" block"
        />
      </label>

      <label htmlFor="tel">
        Phone number
        <input
          type="tel"
          id="tel"
          value={tel}
          placeholder="Telephone number"
          maxLength={18}
          onChange={onTelChange}
          className=" block"
        />
      </label>

      <label htmlFor="address">
        Address
        <input
          type="text"
          id="address"
          placeholder="City, Country"
          value={address}
          onChange={onAddressChange}
          className=" block"
        />
      </label>
    </div>
  );
}
