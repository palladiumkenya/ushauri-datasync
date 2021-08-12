const {User} = require("../models_generated/tbl_users");
const {Clients} = require("../models_generated/tbl_client");
const {CareGiver} = require("../models_generated/tbl_caregiver_not_on_care");
const {Appointments} = require("../models_generated/tbl_appointment");

const {UserFaces} = require("../models_faces/tbl_users");
const {ClientsFaces} = require("../models_faces/tbl_client");
const {CareGiverFaces} = require("../models_faces/tbl_caregiver_not_on_care");
const {AppointmentsFace} = require("../models_faces/tbl_appointment");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const express = require("express");
const router = express.Router();

const _ = require("lodash");
const moment = require("moment");

async function syncUsers() {
    try {
        let max_exisiting_user = await UserFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0
        // console.log(max_exisiting_user.id)

        let users = await User.findAll({
            where:
                {
                    partner_id: 18,
                    id: {
                        [Op.gte]: max_exisiting_user.id
                    }
                }
        })
        for (let i = 0; i < users.length; i++) {
            let userFaces = await UserFaces.findOne({where: {id: users[i].id}});
            if (!userFaces) {
                console.log("Inserting new User...")
                await UserFaces.create(users[i])
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            }
        }
        let updates_users = await User.findAll({
            where: {
                partner_id: 18,
                updated_at: {
                    [Op.gte]: moment().subtract(2, 'days').format("YYYY-MM-DD")
                }
            }
        });
        for (let i = 0; i < updates_users.length; i++) {
            let FoundUsers = await UserFaces.findOne({where: {id: updates_users[i].id}});
            if (FoundUsers) {
                console.log("Updating existing User...")
                await UserFaces.update(updates_users[i], {where: {id: updates_users[i].id}})
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            } else {
                console.log('wrong path')
                await UserFaces.create(updates_users[i])
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
            }
        }
        // $end_time = Carbon::now();

        // $this->send_email($start_time, $end_time, $users->count() + $updates_users->count() . " Users", $a_number . " Users", "Users sync");
        return true
    } catch (err) {
        console.log(err.message)
    }
}

async function sync_care_giver() {
    try {
        let max_existing_care_giver = await CareGiverFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0
        console.log(max_existing_care_giver)
        // $a_number = 0;
        // $start_time = Carbon::now();
        let care_givers = await CareGiver.findAll({
            include: {
                model: User,
                required: true,
                where: {
                    partner_id: 18
                }
            },
            where: {
                id: {[Op.gt]: max_existing_care_giver.id}
            },
            raw: true,
            nest: true
        })
        console.log(care_givers.length)
        //     join('tbl_users', 'tbl_caregiver_not_on_care.created_by', '=', 'tbl_users.id')->select('tbl_caregiver_not_on_care.*')
        // ->where('tbl_caregiver_not_on_care.id', '>', $max_exisiting_care_giver)
        // ->where('tbl_users.partner_id', 18)->get();
        for (let i = 0; i < care_givers.length; i++) {
            let careFACES = await CareGiverFaces.findOne({where: {id: care_givers[i].id}});
            if (!careFACES) {
                console.log(`Insert care giver details...${care_givers[i].id}`)
                CareGiverFaces.create(care_givers[i]);
                // $a_number += 1;
            }
        }
        //     $end_time = Carbon::now();
        //
        //     $this->send_email($start_time, $end_time, $care_givers->count() . " care givers", $a_number . " care givers", "Caregiver sync");
    } catch (e) {
        console.log(e)
        // $this->send_err_email($e->getMessage(), "Caregiver sync");
    }

}

async function syncClients() {
    try {
        let max_existing_client = await ClientsFaces.findOne({
            attributes: [
                [Sequelize.fn('MAX', Sequelize.col('id')), 'id']
            ]
        }) || 0
        // console.log(max_exisiting_user.id)

        let clients = await Clients.findAll({
            where:
                {
                    partner_id: 18,
                    id: {
                        [Op.gte]: max_existing_client.id
                    }
                }
        })
        for (let i = 0; i < clients.length; i++) {
            let clientFaces = await ClientsFaces.findOne({where: {id: clients[i].id}});
            if (!clientFaces) {
                console.log(`Inserting new Client...${clientFaces}`)
                await ClientsFaces.create(clients[i]).then((res) => console.log(res)).catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            }
        }
        let updates_clients = await Clients.findAll({
            where: {
                partner_id: 18,
                updated_at: {
                    [Op.gte]: moment().subtract(2, 'days').format("YYYY-MM-DD")
                }
            }
        });
        for (let i = 0; i < updates_clients.length; i++) {
            let FoundClient = await ClientsFaces.findOne({where: {id: updates_clients[i].id}});
            if (FoundClient) {
                console.log("Updating existing Client")
                console.log(updates_clients[i])
                await ClientsFaces.update(updates_clients[i], {where: {id: updates_clients[i].id}})
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                // $a_number = $a_number + 1;
            } else {
                console.log('wrong path')
                await ClientsFaces.create(updates_clients[i])
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
            }
        }
        // $end_time = Carbon::now();

        // $this->send_email($start_time, $end_time, $users->count() + $updates_users->count() . " Users", $a_number . " Users", "Users sync");
        return true
    } catch (e) {
        console.log(e)
    }

}

function syncAppointments() {

}

function syncPMTCT() {

}

function sync_dfc() {

}

function syncClientOutcomes() {

}

function syncOtherAppType() {

}

function syncTransitClients() {

}

router.get("/", async (req, res) => {
    await syncUsers();
    await sync_care_giver();
    await syncClients();
    syncAppointments();
    syncPMTCT();
    sync_dfc();
    syncClientOutcomes();
    syncOtherAppType();
    // $this->syncOtherFnlOutcome();t
    // $this->syncBroadcast();t
    // $this->syncSmsQueue();t
    syncTransitClients();
    // $this->syncUserOutgoing();t

    //$this->syncClientOutgoing();t
    res.send('now')
});


module.exports = router;
