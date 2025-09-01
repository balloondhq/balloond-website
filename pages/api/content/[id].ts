@@ -1,5 +1,6 @@
 // pages/api/content/[id].ts
         return res.status(401).json({ message: 'Unauthorized' });
       }

       const user = await verifyJWT(token);
-      if (!hasPermission(user.role, 'EDITOR')) {
-        return res.status(403).json({ message: 'Insufficient permissions' });
+      if (!hasPermission(user.role, 'ADMIN')) {
@@ -1,5 +1,6 @@
 // pages/api/content/index.ts
         return res.status(401).json({ message: 'Unauthorized' });
       }

       const user = await verifyJWT(token);
-      if (!hasPermission(user.role, 'EDITOR')) {
-        return res.status(403).json({ message: 'Insufficient permissions' });
+      if (!hasPermission(user.role, 'ADMIN')) {
+        return res.status(403).json({ message: 'Admin permission required' });
       }

       const { section, title, content: contentText, published } = req.body;

       const newContent = await prisma.siteContent.create({
         data: {
           content: contentText,
           published: published || false,
           publishedAt: published ? new Date() : null,
           createdById: user.id,
         },
