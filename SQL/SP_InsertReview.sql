USE [igroup104_test2]
GO
/****** Object:  StoredProcedure [dbo].[SP_InsertReview]    Script Date: 01/07/2022 10:44:41 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		CGroup4
-- Create date: 21.5.2022
-- Description:	SP Insert Review
-- =============================================
ALTER PROCEDURE [dbo].[SP_InsertReview] 
	-- Add the parameters for the stored procedure here
	@apartmentId int,
	@userName nvarchar(30),
	@reviewDate date,
	@comments nvarchar(MAX)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT OFF;

    -- Insert statements for procedure here
	INSERT INTO Reviews(apartmentId, userName, reviewDate, comments)
	VALUES (@apartmentId, @userName, @reviewDate, @comments)

END
