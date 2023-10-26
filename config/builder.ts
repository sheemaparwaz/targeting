if (!process.env.BUILDER_PUBLIC_KEY) {
  throw new Error(
    'Missing environment variable BUILDER_PUBLIC_KEY, signup for builder.io and add your public key to env file'
  )
}

export default {
  apiKey: "97e6e0cdd6a0493da63cf0b4cf432853",
}
