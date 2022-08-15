export const getTime = async (req, res) => {
  try {
    res.json({
      message: 'Successfully got time',
      body: { data: Date.now().toString },
      status: true
    });
  } catch (error) {
    res.json({
      message: 'Getting time failed',
      body: error,
      status: false
    });
  }
};
