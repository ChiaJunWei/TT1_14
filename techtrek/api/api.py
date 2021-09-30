from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import mysql.connector 


app = Flask(__name__)
CORS(app)

DBHOST = os.getenv("DBHOST")
DBUSER = os.getenv("DBUSER")
DBNAME = os.getenv("DBNAME")
DBPORT = os.getenv("DBPORT")

def db_connection_close(conn, cur):
    print('db_connection_closed called')
    cur.close()
    conn.close()

def db_connection_init_ro():
    print('db_connection_init_ro called')
    conn = mysql.connector.connect(user=DBUSER,
                                 database=DBNAME)

    cur = conn.cursor()

    return conn, cur   

@app.route('/test', methods=['GET'])
def test():
    conn, cur = db_connection_init_ro() 
    try:
        # sql = """SELECT approve_status 
        #     FROM information i 
        #     WHERE i.info_id = %(info_id)s"""
        # cur.execute(sql, {'info_id': info_id})

        # approve_status_query_result = cur.fetchone()
        # approve_status = approve_status_query_result[0]
        return jsonify(
                message="this is a test"
            ), 200
    except Exception as e:
        db_connection_close(conn, cur) 
        error_message = "Error: {}".format(e)
        return jsonify(error=error_message), 500


if __name__ == "__main__":
    app.run(debug=True)

