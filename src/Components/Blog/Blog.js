import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            Difference betweenjavascript and node.js
            1. JavaScript is a basic programming language that runs on the JavaScript Engine in any browser. While Node JS is an interpreter or runtime environment for the JavaScript programming language, it requires libraries that can be readily accessible from JavaScript programming to make it more useful.
            2. For one online application, JavaScript is often utilized for any client-side activities. An activity might be dealing with business validation, dynamic page display at a set timealways period, or a simple Ajax request. For every online application, they are used for the maximum amount of time. Node JS, on the other hand, is mostly used for non-blocking operations on any operating system. Non-blocking operations on an operating system include writing or executing a shell script, retrieving specified hardware-related information in a single call, obtaining installation certificate data in the system, and doing a large number of defined tasks.
            JavaScript may run on any engine, including FireFox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a result, JavaScript programming is incredibly simple to create, and any operating environment is equivalent to a full browser. Node JS, on the other hand, only supports the V8 engine, which is unique to Google Chrome. However, written JavaScript code may execute in any environment, regardless of whether it supports the V8 engine. As a result, there are no browser-specific constraints.

            When should you use node.js?
            Node.js thrives in real-time online applications that use websockets and push technologies. What makes that so revolutionary? We now have online applications with real-time, two-way connections, where both the client and server may begin communication, allowing them to freely exchange data, after more than 20 years of stateless-web based on the stateless request-response paradigm. This is in sharp contrast to the conventional online response paradigm, in which the client is always the one to begin contact. Furthermore, it's completely built on the open web stack (HTML, CSS, and JS) and runs on port 80.

            When should you use mongodb?
            BSON documents are used by MongoDB to hold data records. BSON is a binary version of JSON documents that supports a wider range of data types than JSON. Documents are then grouped into collections. If you're acquainted with relational databases, consider a collection to be the equivalent of a table, but without the schema. Documents inside a collection, unlike entries in a relational database, might have varied fields, albeit they usually all serve the same or comparable function. Within a database, there are collections. MongoDB is most commonly used as a distributed database on many, geographically scattered servers in a cluster setup. With sharding, a MongoDB database may extend horizontally across multiple servers using clusters (auto-balancing).

            They also enable applications to duplicate data between servers to provide high availability, thanks to a feature called replica sets in MongoDB, which improves the overall performance and dependability of a MongoDB cluster. Even across replica sets and sharded clusters, MongoDB enables multi-document ACID transactions. That is, if a connection terminates before a transaction is finished, or if any command in the transaction fails, the database undoes all of the changes done during the transaction. Relational databases benefit from ACID compliance as well.

            MongoDB utilizes the MongoDB Query Language to get data into and out of databases (MQL). It has the same syntax as documents, making it simple to work with for developers, but it's nowhere like as intuitive as SQL, the standard query language for relational databases — and many analysts would object to using the words "intuitive" and "SQL" in the same phrase.

            Difference between Sql and Nosql?
            1. Relational databases are SQL, while non-relational databases are NoSQL.
            2. SQL databases have a specified schema and employ structured query language. For unstructured data, NoSQL databases use dynamic schemas.
            3. SQL databases scale vertically, but NoSQL databases scale horizontally.
            4. NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based.
            5. SQL databases excel at multi-row transactions, while NoSQL excels at unstructured data like documents and JSON.

            what is the purpose of jwt and how does it work?
            JWT is a standard that offers a concise and self-contained method for securely transmitting information as a JSON object between a client and a server. Because of their small size, the tokens are simple to send through URL, POST parameter, or HTTP header. Furthermore, because they are self-contained, they include all of the relevant information on a user, eliminating the need to query the database many times.
            Because it is digitally signed with a secret or public/private key combination, the information in a JWT may be trusted.
            Authentication
            Authentication is the primary usage of JWT. When a user logs in to an application, the app generates a JWT and sends it to the user. The JWT will be included in the user's subsequent requests. The token informs the server about the routes, services, and resources that the user has permission to utilize. Because JWT may be used across many domains, it is frequently used for Single Sign On.
            Web Tokens in JSON
            JSON Web Tokens are explained in detail in this video lesson by Thomas Weibenfalk, who also shows how to utilize them for authentication. The tutorial teaches JWT Auth in the simplest way possible, without the use of any additional libraries.
        </div>
    );
};

export default Blog;