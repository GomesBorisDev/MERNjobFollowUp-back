const Application = require('../models/application');

exports.createApplication = (req, res, next) => {
  const application = new Application({
    company: req.body.company,
    position: req.body.position,
    url: req.body.url,
    email: req.body.email,
    website: req.body.website,
    linkedin: req.body.linkedin,
    comment: req.body.comment,
    addedAt: req.body.addedAt
  });
  
  application.save().then(
    () => {
      res.status(201).json({
        message: 'Saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneApplication = (req, res, next) => {
  Application.findOne({
    _id: req.params.id
  }).then(
    (application) => {
      res.status(200).json(application);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.updateApplication = (req, res, next) => {
  const application = new Application({
    _id: req.params.id,
    company: req.body.company,
    position: req.body.position,
    url: req.body.url,
    email: req.body.email,
    website: req.body.website,
    linkedin: req.body.linkedin,
    comment: req.body.comment
  });
  Application.updateOne({_id: req.params.id}, application).then(
    () => {
      res.status(201).json({
        message: 'Updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteApplication = (req, res, next) => {
  Application.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllApps = (req, res, next) => {
  Application.find().then(
    (application) => {
      res.status(200).json(application);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};