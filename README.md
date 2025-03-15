<h1>Przetrwaj.pl</h1>
<p><strong>Przetrwaj.pl</strong> is a community-driven platform for real-time monitoring and reporting of natural disasters. Users can submit reports on hazards such as floods or wildfires, which can be verified and confirmed by the community.</p>

<h2>Features</h2>
<ul>
    <li>User registration and authentication (email, password, username)</li>
    <li>Real-time hazard reporting with descriptions, location, and optional image attachments</li>
    <li>Community verification of reported hazards</li>
    <li>Critical resource tracking (e.g., food, water) with location-based filtering</li>
    <li>Moderator tools for managing users and reports</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Backend:</strong> ASP.NET, Node.js</li>
    <li><strong>Frontend:</strong> React.js</li>
    <li><strong>Styling:</strong> CSS & HTML</li>
    <li><strong>Languages:</strong> JavaScript, C#, HTML, CSS</li>
</ul>


<h2>Use Cases & Responsibilities</h2>

<h3>1. User Registration</h3>
<p>Users can create accounts by providing an email, password, and username.</p>
<ul>
    <li><strong>Frontend:</strong> React form with validation (email format, password strength)</li>
    <li><strong>Backend:</strong> ASP.NET API with user authentication via ASP.NET Identity</li>
    <li><strong>Integration:</strong> Connecting frontend with backend API using Axios/Fetch</li>
</ul>

<h3>2. User Login</h3>
<p>Users can log in and receive a JWT token for authentication.</p>
<ul>
    <li><strong>Frontend:</strong> Login form with "Remember Me" option</li>
    <li><strong>Backend:</strong> ASP.NET authentication, token generation</li>
    <li><strong>Integration:</strong> Storing JWT token and handling authentication in API requests</li>
</ul>

<h3>3. Reporting a Hazard</h3>
<p>Users can submit hazard reports including type, description, location, and optional images.</p>
<ul>
    <li><strong>Frontend:</strong> React form with dropdown for hazard type</li>
    <li><strong>Backend:</strong> Node.js API for storing reports and handling file uploads</li>
    <li><strong>Integration:</strong> Connecting frontend with backend and displaying success messages</li>
</ul>

<h3>4. Confirming a Hazard</h3>
<p>Users can confirm existing reports, increasing their credibility.</p>
<ul>
    <li><strong>Frontend:</strong> "Confirm" button displaying current confirmation count</li>
    <li><strong>Backend:</strong> API for updating confirmation count in the database</li>
    <li><strong>Integration:</strong> Dynamic updates of confirmation count on UI</li>
</ul>

<h3>5. Critical Resource Management</h3>
<p>Users can report and browse critical resources such as food and water.</p>
<ul>
    <li><strong>Frontend:</strong> Resource submission form and filterable list</li>
    <li><strong>Backend:</strong> API to store and retrieve resource data</li>
    <li><strong>Integration:</strong> Real-time updates of resource availability</li>
</ul>

<h3>6. Moderator Panel</h3>
<p>Moderators can manage users and delete invalid reports.</p>
<ul>
    <li><strong>Frontend:</strong> Admin dashboard for managing reports and users</li>
    <li><strong>Backend:</strong> API endpoints for user banning and report deletion</li>
    <li><strong>Integration:</strong> Connecting UI actions with backend functionality</li>
</ul>


<h2>Contributing</h2>
<p>We welcome contributions! Feel free to open an issue or submit a pull request.</p>

<h2>License</h2>
<p>This project is licensed under the <strong>MIT License</strong>. See the <code>LICENSE</code> file for more details.</p>
