require('behaviour3js');
var roleBehaviour = {};
roleBehaviour['FindSource'] = require('behaviour.findSource');
roleBehaviour['Harvest'] = require('behaviour.harvest');
roleBehaviour['StoreResources'] = require('behaviour.storeResources');
roleBehaviour['Upgrade'] = require('behaviour.upgrade');

var behaviourTree = new b3.BehaviorTree();
behaviourTree.load({
    "title": "A Behavior Tree",
    "description": "",
    "root": "ea489313-13ca-4c00-8190-ddd363222d8b",
    "display": {
        "camera_x": 577,
        "camera_y": 377.5,
        "camera_z": 1.25,
        "x": 0,
        "y": 0
    },
    "properties": {},
    "nodes": {
        "ea489313-13ca-4c00-8190-ddd363222d8b": {
            "id": "ea489313-13ca-4c00-8190-ddd363222d8b",
            "name": "MemSequence",
            "title": "Harvest Sequence",
            "description": "",
            "display": {
                "x": 208,
                "y": 0
            },
            "parameters": {},
            "properties": {},
            "children": [
                "0dbc2fbb-07fd-430d-8081-dbf3718e28db",
                "ff6435ae-45fb-432c-8701-188529f23b73",
                "2ed4b0d5-8fcd-44bf-8881-742af5c960cc"
            ]
        },
        "0dbc2fbb-07fd-430d-8081-dbf3718e28db": {
            "id": "0dbc2fbb-07fd-430d-8081-dbf3718e28db",
            "name": "FindSource",
            "title": "Find Source",
            "description": "",
            "display": {
                "x": 416,
                "y": -74.66666666666666
            },
            "parameters": {},
            "properties": {}
        },
        "ff6435ae-45fb-432c-8701-188529f23b73": {
            "id": "ff6435ae-45fb-432c-8701-188529f23b73",
            "name": "Harvest",
            "title": "Harvest",
            "description": "",
            "display": {
                "x": 416,
                "y": -10.666666666666657
            },
            "parameters": {},
            "properties": {}
        },
        "2ed4b0d5-8fcd-44bf-8881-742af5c960cc": {
            "id": "2ed4b0d5-8fcd-44bf-8881-742af5c960cc",
            "name": "Priority",
            "title": "Priority",
            "description": "",
            "display": {
                "x": 416,
                "y": 85.33333333333334
            },
            "parameters": {},
            "properties": {},
            "children": [
                "a1b5727d-83f5-4757-84f3-c96eca8001cb",
                "c0f8fe48-b12c-4809-8f5b-dfe761c2a47f"
            ]
        },
        "a1b5727d-83f5-4757-84f3-c96eca8001cb": {
            "id": "a1b5727d-83f5-4757-84f3-c96eca8001cb",
            "name": "StoreResources",
            "title": "Store Resources",
            "description": "",
            "display": {
                "x": 624,
                "y": 53.33333333333334
            },
            "parameters": {},
            "properties": {}
        },
        "c0f8fe48-b12c-4809-8f5b-dfe761c2a47f": {
            "id": "c0f8fe48-b12c-4809-8f5b-dfe761c2a47f",
            "name": "Upgrade",
            "title": "Upgrade",
            "description": "",
            "display": {
                "x": 624,
                "y": 117.33333333333334
            },
            "parameters": {},
            "properties": {}
        }
    },
    "custom_nodes": [
        {
            "name": "FindSource",
            "title": "Find Source",
            "category": "action"
        },
        {
            "name": "EnemiesNear",
            "title": "Enemies Nearby",
            "category": "condition"
        },
        {
            "name": "MoveTo",
            "title": "Move To",
            "category": "action"
        },
        {
            "name": "Harvest",
            "title": "Harvest",
            "category": "action"
        },
        {
            "name": "StoreResources",
            "title": "Store Resources",
            "category": "action"
        },
        {
            "name": "NoEnergy",
            "title": "No Energy",
            "category": "condition"
        },
        {
            "name": "Upgrade",
            "title": "Upgrade",
            "category": "action"
        }
    ]
}, roleBehaviour);
module.exports = behaviourTree;