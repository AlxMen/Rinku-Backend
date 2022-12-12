const Subscription = require("../models/subscriptions.model");
const Notification = require("../models/notification.model");

function getSubscriptions(req, res) {
  Subscription
    .find({ userid: res.locals.user._id })
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

function createSubscriptions(req, res) {
  Subscription
    .create({ userid: res.locals.user._id, ...req.body })
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

function updateSubscriptions(req, res) {
  Subscription
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

function deleteSubscriptions(req, res) {
  Notification
    .deleteMany({ subscriptionid: req.params.id })
    .then(notif => {
      Subscription
        .findOneAndDelete({ _id: req.params.id })
        .then(sus => res.json(sus))
        .catch((err) => res.json(err));
    })
}

module.exports = {
  getSubscriptions,
  createSubscriptions,
  updateSubscriptions,
  deleteSubscriptions,
};
